import videoData from '../data/videos.json';

export function getVideos() {
  return videoData.items.map((item) => {
    return {
      title: item.snippet.title,
      imageUrl: item.snippet.thumbnails.high.url,
      id: item?.id?.videoId,
    };
  });
}
