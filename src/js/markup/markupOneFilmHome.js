import { convertGanresByID, convertReliseDate, convertReiting, convertGanresByName } from '../convert/convert';
import imageDefaults from '/src/images/broken-img.jpg';

const apiImage = "https://image.tmdb.org/t/p/";


export function markupOneFilmHomePage({ id, original_title, poster_path, genres, release_date, vote_average, name, first_air_date, vote_count, popularity, overview }) {
    
    return `<button type="button" class="modal__close-button" data-action="close">X
    </button>
    
    <div class='modal' data-movie-id='${id}'>
  <div class='modal__thumb-for-image'>
    <img class='modal__poster' src=${!poster_path ? imageDefaults : `${apiImage}original${poster_path}`} />
  </div>
  <div class='modal__thumb-for-description'>
    <div class='modal__original-title'>${original_title}</div>
    <table class='modal__movie-info-table'>
      <tbody>
        <tr class='modal__movie-info-table-row row1'>
          <td class='modal__movie-info-table-title col1'>Vote / Votes</td>
          <td class='col2'>
            <div class='cell-div'>
              <div class='col2-vote'>${vote_average}</div>
              <p>/</p>
              <div class='col2-votes'>${vote_count}</div>
            </div>
          </td>
        </tr>
        <tr class='modal__movie-info-table-row row2'>
          <td class='modal__movie-info-table-title col1'>Popularity</td>
          <td class='col2'>${popularity}</td>
        </tr>
        <tr class='modal__movie-info-table-row row3'>
          <td class='modal__movie-info-table-title col1'>Original Title</td>
          <td class='col2'>${titleToUpperCase(original_title)}</td>
        </tr>
        <tr class='modal__movie-info-table-row row4'>
          <td class='modal__movie-info-table-title col1'>Genre</td>
          <td class='col2'>${convertGanresByName(genres)}</td>
        </tr>
      </tbody>
    </table>
    <h3 class='modal__movie-about'>ABOUT</h3>
    <p class='modal__movie-about-description'>${overview}</p>
    <div class='modal__button-block'>
      <button type='button' class='modal__button-tmpl add-to-watched-button'>
        ADD TO WATCHED
      </button>
      <button type='button' class='modal__button-tmpl add-to-queue-button'>
        ADD TO QUEUE
      </button>
      <button type='button' class='modal__button-tmpl add-to-trailer-button'>
        WATCHED TRAILER
      </button>
    </div>
  </div>
</div>`
}

export function titleToUpperCase(name) {
    if (name) {
    return    name.toUpperCase()
    }
}