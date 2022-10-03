import getRefs from "../refs/refs";

const refs = getRefs()

yearPickerFilter()

export function yearPickerFilter() {
    let yearStart = 1900;
    let yearEnd = new Date().getFullYear();
    let years = [];

    refs.yearFilter.insertAdjacentHTML('beforeend', '<option class="filter__option" value="">Choose Year</option>');
    for (let i = yearEnd; i > yearStart; i--) {
        years.push(`<option class="filter__option" value="${i}">${i}</option>`);
    }

   return refs.yearFilter.insertAdjacentHTML('beforeend', years);
}


function addClassYear() {
    refs.yearFilter[0].classList.add("filter__option-choose--year")
}

addClassYear()