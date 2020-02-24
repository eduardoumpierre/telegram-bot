import axios from 'axios';

const config = {
  headers: {
    authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
  },
};

const API_URL = 'https://api.imgur.com';

export const getSubredditGallery = query => axios.get(`${API_URL}/3/gallery/r/${query}`, config);
