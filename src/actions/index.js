
import axiosService from 'services/AxiosService';
const { bwmAxios } = axiosService;

export const uploadImage = image => {
  const formData = new FormData();
  formData.append('image', image);

  return bwmAxios.post('/image-upload', formData)
    .then(res => res.data)
}

export const extractApiErrors = (resError) => {
  let errors = [{title: 'Error!', detail: 'Ooops, something went wrong!'}];
  if (resError && resError.data && resError.data.errors) {
    errors = resError.data.errors;
  }
  return errors;
}

export const deleteResource = async (items, { url }) => {
  let newItems = [  ...items ];
  await bwmAxios
    .delete(url)
    .then((res) => res.data)
    .then(({ id }) => {
      const index = newItems.findIndex((i) => i._id === id);
      newItems = newItems.filter((item, itemIndex) => index !== itemIndex);
    })
    .catch((error) => {
      newItems.errors = extractApiErrors(error.response || []);
    });
  return newItems;
};

export * from './auth';
export * from './rentals';
export * from './bookings';
