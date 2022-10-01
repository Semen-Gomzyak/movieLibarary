import getRefs from './refs';
import { createMarkupGalleryElement} from './markupGallerylEl';
import { prevPage, requestPopularMovies, nextPage, getPage, resetPage, userPage, decrementByThree, incrementByThree, requestFilmOrGanre } from './api';
import {spinnerOn, spinnerOff} from './spiner/spiner'



const refs = getRefs();

document.addEventListener('DOMContentLoaded', () => {
    spinnerOn()
    choiseFetchTrendMovie()
    fetchTrendMovies();
});

let currentPage = 1;

export async function fetchTrendMovies(name) {
    try {
        refs.galleryListEL.innerHTML = '';

        if (refs.galleryListEL.classList.contains("fetch__search")) {
            
        const { results, page, total_pages } = await requestPopularMovies();  
        spinnerOn()
        results.length &&
        refs.galleryListEL.insertAdjacentHTML(
        'afterbegin',
        results.map(createMarkupGalleryElement).join('')
      );
        return renderPagination(page, total_pages); 
        }


        if (refs.galleryListEL.classList.contains("fetch__query")) {
            console.log("pltas")
            spinnerOn()
        const { results, page, total_pages } = await requestFilmOrGanre(name);  
        
            console.log(results)
        results.length &&
        refs.galleryListEL.insertAdjacentHTML(
        'afterbegin',
        results.map(createMarkupGalleryElement).join('')
            );
          
        return renderPagination(page, total_pages); 
        }
    
    
   } catch (error) {
    console.log(error);
  }
}

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
    paginationMarkup += `<li class="pagination__number display-none">${totalPage}</li>`;
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

checkingEventPaginationsValues(e.target.textContent, e.target.classList.contains("pagination__number--prev"))
window.scrollTo({ top: 240, behavior: 'smooth' });
    
fetchTrendMovies(getPage())
}

function checkingEventPaginationsValues(evt, boolean) {
    const target = evt;
    const decrementByThreeClass = boolean;

    if (Number(target)) {
      return  userPage(target)
    }
  
    if (target === '...') {
     return  decrementByThreeClass ? decrementByThree() : incrementByThree();

    }

    if (target === '→' || target === '←') {
      return  target === '→' ? nextPage() : prevPage();
    }
}

function choiseFetchTrendMovie() {
    refs.galleryListEL.classList.add("fetch__search");
    refs.galleryListEL.classList.remove("fetch__query");
}

function choiseFetchQueryMovie() {
    refs.galleryListEL.classList.remove("fetch__search");
    refs.galleryListEL.classList.add("fetch__query");
}

refs.searchEL.addEventListener("submit", searchSubmit);

function searchSubmit(evt) {
    evt.preventDefault();
    choiseFetchQueryMovie()
    fetchTrendMovies(refs.searchValueElement.value)
    
}