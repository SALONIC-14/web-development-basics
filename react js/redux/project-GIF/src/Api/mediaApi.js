
import axios from "axios";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_ACCESS_KEY=import.meta.env.VITE_PEXELS_KEY;
const GIPHY_ACCESS_KEY=import.meta.env.VITE_GIPHY_KEY;

// Replace with your Unsplash access key
 export async function fetchPhotos(query ,page=1,per_page=20) {
    const response=await axios.get('https://api.unsplash.com/search/photos',
        {
        params:{query, page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_ACCESS_KEY}`}
    
    })
    
    return response.data
}
 export async function fetchVideo(query ,per_page=20) {
    const response=await axios.get('https://api.pexels.com/v1/videos/search',
        {
        params:{query,per_page},
        headers:{Authorization:PEXELS_ACCESS_KEY}
    
    })
    
    return response
}

export async function fetchGifs(query, limit = 20) {
  const response = await axios.get(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        api_key: GIPHY_ACCESS_KEY,
        q: query,
        limit,
        offset: 0,
      },
    }
  );

  return response.data.data;
}