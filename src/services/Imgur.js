import Axios from 'axios';

const config = {
  headers: {
    authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
  },
};

export const getSubredditGallery = query =>
  Axios.get(`https://api.imgur.com/3/gallery/r/${query}`, config);
