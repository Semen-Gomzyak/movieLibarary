import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bb9be7856d820d280efdc8865f07d5b2';
let apiPage = 1;
let genre = "";
let year = 0;

axios.defaults.baseURL = BASE_URL;

export async function requestPopularMovies() {
    const response = await axios(`trending/all/day?api_key=${API_KEY}&page=${getPage()}`);
    return  response.data
}

export async function requestFilm(searchQuery) {
    const serch = await axios(`search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${getPage()}&include_adult=false`);
   return serch.data
}

export async function requestGenre() {
    const serch = await axios(`discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=${getPage()}&with_genres=${getGenres()}`);

   return serch.data
}

export async function requestSoonRelise() {
const serch = await axios(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=${getPage()}`);

   return serch.data
}

export async function requestRating() {
    const serch = await axios(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=${getPage()}`);
   return serch.data
}

export async function requestYear() {
    const serch = await axios(`/discover/movie?&primary_release_year=${getYear()}&sort_by=popularity.desc&api_key=${API_KEY}&page=${getPage()}`);
   return serch.data
}

export async function requestYearAndGenre() {
    const serch = await axios(`/discover/movie?with_genres=${getGenres()}&primary_release_year=${getYear()}&sort_by=popularity.desc&api_key=${API_KEY}&page=${getPage()}`);
   return serch.data
}

export async function requestFilmByID(id) {
    const serch = await axios(`movie/${id}?api_key=${API_KEY}`);

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

export function  changeGenres(name) {
    genre = name
}

export function  getGenres() {
    return genre
}

export function  changeYear(number) {
    year = number
}

export function  getYear() {
    return year
}