import getRefs from '../refs/refs';
import { fetchDistribution } from './fetchDistribution';
import { resetPage } from './api';
import { choiseFetchSoonRelise } from './changeClass';


const refs = getRefs();
refs.soonReliseButtonEl.addEventListener("click", clickForSoonRelise)

function clickForSoonRelise(evt) {
  evt.preventDefault()
  resetPage()
  choiseFetchSoonRelise()
  fetchDistribution()
}