import axios from 'axios';

const key_API = '29352344-4ccf7f6be6a358b259d84351d';

const fetchImgGallery = async (nameRequest, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: key_API,
      q: nameRequest,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: 12,
    },
  });
  return response.data;
};

export { fetchImgGallery };