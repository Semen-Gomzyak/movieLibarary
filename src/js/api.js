import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'bb9be7856d820d280efdc8865f07d5b2';
let apiPage = 1;

axios.defaults.baseURL = BASE_URL;

requestFilmOrGanre("adve", 1)

export async function requestPopularMovies() {
    const response = await axios(`3/trending/all/day?api_key=${API_KEY}&page=${getPage()}`);
    return  response.data
}

export async function requestFilmOrGanre(searchQuery) {
    const serch = await axios(`3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${getPage()}&include_adult=false`);
   return serch.data
}

export function nextPage() {
    apiPage += 1;
}

export function prevPage() {
    apiPage -= 1;
}

export function getPage() {
    return apiPage
}

export function userPage(number) {
    apiPage = number;
}

export function resetPage() {
    apiPage = 1;
}

export function decrementByThree() {
    apiPage -= 3;
}

export function  incrementByThree() {
    apiPage += Number(3);
}