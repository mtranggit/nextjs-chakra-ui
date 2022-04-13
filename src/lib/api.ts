const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1";

export const getCuratedPhotos = async () => {
	const res = await fetch(`${BASE_URL}/curated?page=11&per_page=18`, {
		headers: {
			Authorization: API_KEY,
		},
	});
	const responseJson = await res.json();
	return responseJson.photos;
}

export const getQueryPhotos = async (query) => {
	const res = await fetch(`${BASE_URL}/search?query=${query}`, {
		headers: {
			Authorization: API_KEY,
		},
	});
	const responseJson = await res.json();
	return responseJson.photos;
}

export const getPhotoById = async (id) => {
	const res = await fetch(`${BASE_URL}/photos/${id}`, {
		headers: {
			Authorization: API_KEY,
		},
	});
	const responseJson = await res.json();
	return responseJson;
}