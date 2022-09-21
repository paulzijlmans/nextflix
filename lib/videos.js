async function getCommonVideos(url) {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = 'youtube.googleapis.com/youtube/v3';
    const response = await fetch(
      `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();

    if (data?.error) {
      console.error('Youtube API error', data.error);
      return [];
    }

    return data?.items.map((item) => {
      return {
        title: item.snippet.title,
        imageUrl: item.snippet.thumbnails.high.url,
        id: item?.id?.videoId || item.id,
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
