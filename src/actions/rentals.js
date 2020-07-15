import axiosService from "services/AxiosService";
const { bwmAxios } = axiosService;

export const verifyRentalOwner = (rentalId) => {
  return bwmAxios.get(`/rentals/${rentalId}/verify-user`);
};

export const createRental = rental => {
  return bwmAxios.post('/rentals', rental);
}

export const updateRental = (
  dispatch,
  { id, rentalData, onSuccess, onError }
) => {
  dispatch("UPDATE_RENTAL_SUCCESS", { id, rentalData, onSuccess, onError });
};
