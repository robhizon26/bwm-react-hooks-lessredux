import axiosService from "services/AxiosService";
import { deleteResource } from "../actions";
const { bwmAxios } = axiosService;

export const bookingActions = {
  FETCH_USER_BOOKINGS: async (state) => {
    let bookings = [];
    await bwmAxios.get("/bookings/me").then((res) => (bookings = res.data));
    console.log("FETCH_USER_BOOKINGS", bookings);
    return { items: { bookings }, errors: bookings.errors  };
  },
  FETCH_RECEIVED_BOOKINGS:async (state) => {
    let bookings = [];
    await bwmAxios.get('/bookings/received').then((res) => (bookings = res.data));
    console.log("FETCH_RECEIVED_BOOKINGS", bookings);
    return { items: { bookings } , errors: bookings.errors };
  },
  DELETE_BOOKING:async (state,bookingId) => {
    const bookings = await deleteResource(state.items.bookings, { url: `/bookings/${bookingId}`} );
    console.log("DELETE_BOOKING", { items: { bookings }, errors: bookings.errors });
    return { items: { bookings }, errors: bookings.errors };
  },
};

   