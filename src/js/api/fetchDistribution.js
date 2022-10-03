import getRefs from '../refs/refs';
import { createMarkupGalleryElement } from '../markup/markupGallerylEl';
import { requestPopularMovies, requestFilm, requestSoonRelise, requestRating, requestGenre, requestYear, requestYearAndGenre} from './api';
import { spinnerOn } from '../spiner/spiner'
import { renderPagination } from '../pagination/pagination'
import { getSerchName } from './searchQuery';
import { choiseFetchTrendMovie } from './changeClass';
import { nextPage } from './api';

const refs = getRefs();

document.addEventListener('DOMContentLoaded', () => {
    spinnerOn()
    choiseFetchTrendMovie()
    fetchDistribution();
});

export async function fetchDistribution() {
  try {
    refs.galleryListEL.innerHTML = '';

        if (refs.galleryListEL.classList.contains("fetch__search")) {
            
          const { results, page, total_pages } = await requestPopularMovies();  console.log(results)
       return fetchDistributionOptions(results, page, total_pages)
        }

        /* поиск по запросу */
        if (refs.galleryListEL.classList.contains("fetch__query")) {
        const { results, page, total_pages } = await requestFilm(getSerchName());  
       return fetchDistributionOptions(results, page, total_pages)
      }
      
    /* поиск по скорому релизу */
       if (refs.galleryListEL.classList.contains("fetch__soon-relise")) {
         const { results, page, total_pages } = await requestSoonRelise();  
        
     return  fetchDistributionOptions(results, page, total_pages)
      }
      
    /* поиск по рейтингу */
      if (refs.galleryListEL.classList.contains("fetch__rating")) {
        const { results, page, total_pages } = await requestRating();  
        
     return  fetchDistributionOptions(results, page, 500)
    }
    
        /* поиск по жанру и году */
    if (refs.galleryListEL.classList.contains("fetch__year") && refs.galleryListEL.classList.contains("fetch__genres")) {
        const { results, page, total_pages } = await requestYearAndGenre();  
        
     return  fetchDistributionOptions(results, page, total_pages)
      }
      
    /* поиск по жанру */
    if (refs.galleryListEL.classList.contains("fetch__genres")) {
        const { results, page, total_pages } = await requestGenre();  
        
     return  fetchDistributionOptions(results, page, total_pages)
    }
    
    /* поиск по году */
    if (refs.galleryListEL.classList.contains("fetch__year")) {
        const { results, page, total_pages } = await requestYear();  
        
     return  fetchDistributionOptions(results, page, total_pages)
      }
      
    
    
   } catch (error) {
      console.log(error);
      
  }
}


function fetchDistributionOptions(results, page, total_pages) {
    spinnerOn()
    
        results.length &&
        refs.galleryListEL.insertAdjacentHTML(
        'afterbegin',
        results.map(createMarkupGalleryElement).join('')
      );
        return renderPagination(page, total_pages); 
}
