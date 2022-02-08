import axios from 'axios';
import { FILE_TYPE, FILE_TYPE_MAP } from '../helpers/constants';

const getImageContent = ({ url_overridden_by_dest: url }) => ({
  mime_type: FILE_TYPE.PHOTO,
  photo_url: url,
  thumb_url: url,
});

const getVideoContent = ({ preview, media, title }) => ({
  title,
  mime_type: FILE_TYPE.VIDEO,
  thumb_url: media.oembed.thumbnail_url,
  video_url: preview.reddit_video_preview.fallback_url,
});

const getGifContent = ({ url }) => ({
  gif_url: url,
  mime_type: FILE_TYPE.GIF,
  thumb_url: url,
  thumb_mime_type: FILE_TYPE.GIF,
});

const getItemContent = data => {
  const { url, preview } = data;

  const isGif = url.match(/\.gif$/);
  const isVideo = !isGif && preview.reddit_video_preview;

  if (isVideo) return getVideoContent(data);

  if (isGif) return getGifContent(data);

  return getImageContent(data);
};

export const getSubredditGallery = async query => {
  console.log(`Fetching subreddit ${query}`);

  const {
    data: { data: response },
  } = await axios.get(`https://www.reddit.com/r/${query}/hot.json`);

  const result = response.children
    .filter(({ data: { stickied, preview } }) => !stickied && preview)
    .map(({ data }) => {
      try {
        const { id } = data;
        const content = getItemContent(data);
        const type = FILE_TYPE_MAP[content.mime_type] || FILE_TYPE_MAP.IMAGE;

        return {
          id,
          type,
          ...content,
        };
      } catch (e) {
        return undefined;
      }
    })
    .filter(e => e);

  console.log(`Fetched data for subreddit ${query}`);

  return result;
};
