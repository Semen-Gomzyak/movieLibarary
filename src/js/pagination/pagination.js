import getRefs from '../refs/refs';
import { createMarkupGalleryElement} from '../markup/markupGallerylEl';
import { prevPage, requestPopularMovies, nextPage, getPage, resetPage, userPage, decrementByThree, incrementByThree, requestFilm, requestSoonRelise } from '../api/api';
import { spinnerOn, spinnerOff } from '../spiner/spiner'
import { fetchDistribution } from '../api/fetchDistribution';
import { choiseFetchTrendMovie } from '../api/changeClass';

const refs = getRefs();

let currentPage = 1;

export function renderPagination(page, totalPage) {
  currentPage = page;
  let paginationMarkup = '';
  let beforeTwoPage = page - 2;
  let beforePage = page - 1;
  let afterTwoPage = page + 2;
  let afterPage = page + 1;

  if (page > 1) {
    paginationMarkup += `<li class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>`;
  }
  if (page > 2) {
    paginationMarkup += `<li class="pagination__number display-none">1</li>`;
  }
  if (page > 4) {
    paginationMarkup += `<li class="pagination__number pagination__number--prev display-none">...</li>`;
  }

  if (page > 3) {
    paginationMarkup += `<li class="pagination__number">${beforeTwoPage}</li>`;
  }

  if (page >= 2) {
    paginationMarkup += `<li class="pagination__number">${beforePage}</li>`;
  }

  paginationMarkup += `<li class="pagination__number active">${page}</li>`;
  if (page < totalPage - 1) {
    paginationMarkup += `<li class="pagination__number">${afterPage}</li>`;
  }
  if (page < totalPage - 2) {
    paginationMarkup += `<li class="pagination__number">${afterTwoPage}</li>`;
  }
  if (page <= totalPage - 1) {
    if (page < totalPage - 3) {
      paginationMarkup += `<li class="pagination__number pagination__number--next display-none">...</li>`;
    }
    paginationMarkup += `<li class="pagination__number pagination__number--totalpage display-none">${totalPage}</li>`;
  }

  if (page < totalPage) {
    paginationMarkup += `<li class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>`;
  }
  refs.paginationList.innerHTML = paginationMarkup;
 
  refs.paginationList.addEventListener('click', onPagination);
}

export function onPagination(e) {
  if (e.target.nodeName !== `LI`) {
    return;
    }

checkingEventPaginationsValues(e.target.textContent, e.target.classList.contains("pagination__number--prev"), e.target.classList.contains("pagination__number--totalpage"))
window.scrollTo({ top: 240, behavior: 'smooth' });
    
fetchDistribution(getPage())
}

function checkingEventPaginationsValues(evt, booleanPrev, booleanTotal) {
    const target = evt;
  const decrementByThreeClass = booleanPrev;
  const totalPage = booleanTotal;

    if (Number(target)) {
      return  userPage(target)
    }
  
    if (target === '...') {
     return  decrementByThreeClass ? decrementByThree() : incrementByThree();

    }

    if (target === '→' || target === '←') {
      return  target === '→' ? nextPage() : prevPage();
  }
  
  if (totalPage) {
      userPage(target)
  }

}