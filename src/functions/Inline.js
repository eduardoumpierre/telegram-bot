import { getSubredditGallery } from '../services/Imgur';
import { FILE_TYPE } from '../helpers/constants';

export const getInlineResult = async (bot, data) => {
  const { id, query } = data;

  if (query) {
    const response = await getSubredditGallery(query);

    const {
      data: { data },
    } = response;

    bot.answerInlineQuery(
      id,
      data
        .filter(
          item =>
            !item.is_album &&
            (item.type === FILE_TYPE.PHOTO || item.type === FILE_TYPE.GIF)
        )
        .sort(() => 0.5 - Math.random())
        .slice(0, 20)
        .map(item => {
          const type = item.type === FILE_TYPE.PHOTO ? 'photo' : 'gif';

          return {
            type,
            id: item.id,
            [`${type}_url`]: item.link,
            thumb_url: item.link,
            title: item.title || '',
            description: item.description || '',
          };
        })
    );
  }
};
