import getRefs from '../refs/refs';
import { fetchDistribution } from './fetchDistribution';
import { resetPage, changeYear, getGenres } from './api';
import { choiseFetchYear, choiseFetchYearAndGenres } from './changeClass';
import { spinnerOff } from '../spiner/spiner';


const refs = getRefs();

refs.yearFilter.addEventListener("click", clickForYear);

function clickForYear(evt) {
    evt.preventDefault()
    const evtIndex = refs.yearFilter.options.selectedIndex;
    const convertToIndexValue = refs.yearFilter[evtIndex].attributes.value.value;

    if (getGenres() !== "") {
    if (convertToIndexValue === [0]) {
       return spinnerOff()
    }
    }

    if (getGenres() !== "") {
        if (convertToIndexValue !== [0]) {
    resetPage()
    changeYear(convertToIndexValue)
    choiseFetchYearAndGenres()
    fetchDistribution()
    }
    }

    
    if (getGenres() === "") {
        if (convertToIndexValue !== [0]) {
    resetPage()
    changeYear(convertToIndexValue)
    choiseFetchYear()
    fetchDistribution()
    }
    }

}

// refs.filterYearChoose.addEventListener("mouseup", mouseupForYear)

// function mouseupForYear(evt) {
//     evt.preventDefault()

//     if (evt.currentTarget.selectedIndex === 0) {
//     return
//     }

//     if (evt.currentTarget.selectedIndex > 0) {
//      return refs.yearFilter.addEventListener("click", clickForYear);
//     }
// }