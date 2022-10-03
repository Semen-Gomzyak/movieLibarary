import getRefs from '../refs/refs';
import { fetchDistribution } from './fetchDistribution';
import { resetPage } from './api';
import { choiseFetchRating } from './changeClass';


const refs = getRefs();
refs.ratingButtonEl.addEventListener("click", clickForRating)

function clickForRating(evt) {
  evt.preventDefault()
  resetPage()
  choiseFetchRating()
  fetchDistribution()
}