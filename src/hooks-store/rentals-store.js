import axiosService from "services/AxiosService";
import { deleteResource, extractApiErrors } from "../actions";
import { toast } from "react-toastify";
const { bwmAxios } = axiosService;

export const rentalActions = {
  FETCH_RENTALS: async (state, location) => {
    let rentals = [];
    const query = location ? `/rentals?city=${location}` : "/rentals";
    const res = await bwmAxios.get(query);
    if (res) rentals = res.data;
    console.log("FETCH_RENTALS", rentals);
    return { items: { rentals } };
  },
  FETCH_RENTAL_BY_ID: async (state, rentalId) => {
    let rental = {};
    const res = await bwmAxios.get(`/rentals/${rentalId}`);
    if (res) rental = res.data;
    console.log("FETCH_RENTAL_BY_ID", rental);
    return { items: { rental, bookings:state.items.bookings },errors:null };
  },
  FETCH_MY_RENTALS: async (state, rentalId) => {
    let rentals = [];
    const res = await bwmAxios.get("/rentals/me");
    if (res) rentals = res.data;
    console.log("FETCH_MY_RENTALS", rentals);
    return { items: { rentals } };
  },
  UPDATE_RENTAL_SUCCESS: async (
    state,
    { id, rentalData, onSuccess, onError }
  ) => {
    let rental = {};
    await bwmAxios
      .patch(`/rentals/${id}`, rentalData)
      .then((res) => res.data)
      .then((updatedRental) =>{  
        rental =updatedRental;
        onSuccess();})
      .catch((error) => {
        const errors = extractApiErrors(error.response || []);
        const message =
          errors.length > 0 ? errors[0].detail : "Ooops, something went wrong";
        toast.error(message, {
          autoClose: 3000,
        });
        onError();
      });
      console.log("UPDATE_RENTAL_SUCCESS", rental);
      return { items: { rental  } };
  },
  DELETE_RENTAL: async (state, rentalId) => {
    const rentals = await deleteResource(state.items.rentals, {
      url: `/rentals/${rentalId}`,
    });
    console.log("DELETE_RENTAL", { items: { rentals }, errors: rentals.errors });
    return { items: { rentals }, errors: rentals.errors };
  },
};
 