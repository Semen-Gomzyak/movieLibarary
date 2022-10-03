import getRefs from '../refs/refs';
import { fetchDistribution } from './fetchDistribution';
import { resetPage, changeGenres, getYear } from './api';
import { choiseFetchGenres, choiseFetchYearAndGenres } from './changeClass';
import { spinnerOff } from '../spiner/spiner';



const refs = getRefs();
refs.filterGenres.addEventListener("mouseup", mouseupForGenres);

function mouseupForGenres(evt) {
    evt.preventDefault()

    if (evt.currentTarget.selectedIndex === 0) {
    return
    }

    if (evt.currentTarget.selectedIndex > 0) {
     return refs.filterGenres.addEventListener("click", clickForGenres);
    }
}


function clickForGenres(evt) {
    evt.preventDefault()
    const evtIndex = refs.filterGenres.options.selectedIndex;
    const convertToIndexValue = refs.filterGenres[evtIndex].attributes.value.value;

    if (getYear() > 0) {
        if (convertToIndexValue !== [0]) {
    resetPage()
    changeGenres(convertToIndexValue)
    choiseFetchYearAndGenres()
     fetchDistribution()
    }
    }

    if (getYear() === 0) {
        if (convertToIndexValue === [0]) {
        return spinnerOff()
    }
    }

    if (convertToIndexValue !== [0]) {
        resetPage()
    changeGenres(convertToIndexValue)
    choiseFetchGenres()
    fetchDistribution()
    }

    return refs.filterGenres.removeEventListener("click", clickForGenres);
}
