import getRefs from '../refs/refs';
import { resetPage } from './api';
import { choiseFetchQueryMovie } from './changeClass';
import { fetchDistribution } from './fetchDistribution';

const refs = getRefs()
refs.searchEL.addEventListener("submit", searchSubmit);

let serchName = "";

export function getSerchName() {
  return serchName
}

function searchSubmit(evt) {
  evt.preventDefault();
  resetPage()
  choiseFetchQueryMovie()
  
  serchName = refs.searchValueElement.value;
    fetchDistribution()
    
}