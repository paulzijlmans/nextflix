import videoTestData from '../data/videos.json';

async function fetchVideos(url) {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const BASE_URL = 'youtube.googleapis.com/youtube/v3';

  const response = await fetch(
    `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
  );
  return response.json();
}

async function getCommonVideos(url) {
  try {
    const isDev = process.env.ENVIRONMENT;
    const data = isDev ? videoTestData : await fetchVideos(url);

    if (data?.error) {
      console.error('Youtube API error', data.error);
      return [];
    }

    return data?.items.map((item) => {
      const snippet = item.snippet;
      return {
        title: snippet.title,
        imageUrl: snippet.thumbnails.high.url,
        id: item?.id?.videoId || item.id,
        description: snippet.description,
        publishTime: snippet.publishedAt,
        channelTitle: snippet.channelTitle,
        statistics: item.statistics ? item.statistics : { viewCount: 0 },
      };
    });
  } catch (error) {
    console.error('Something went wrong when fetching videos', error);
    return [];
  }
}

export async function getVideos(searchQuery) {
  const URL = `search?part=snippet&q=${searchQuery}&type=video`;
  return getCommonVideos(URL);
}

export async function getPopularVideos() {
  const URL =
    'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=NL';
  return getCommonVideos(URL);
}

export async function getYoutubeVideoById(videoId) {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;
  return getCommonVideos(URL);
}
