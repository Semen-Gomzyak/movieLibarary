const apiImage = "https://image.tmdb.org/t/p/";
import imageDefaults from '/src/images/broken-img.jpg';
import { convertGanresByID, convertReliseDate, convertReiting } from '../convert/convert';


export function createMarkupGalleryElement({ id, title, poster_path, genre_ids, release_date, vote_average, name, first_air_date }) {

            return `<li class="gallery-film__item" data-movie-id = ${id}>
    <a data-modal-open href="" class="gallery__link link" data-movie-id = ${id}>
        <div class="gallery-list__card">
        <div class="gallery-list__poster">
        <img src=${!poster_path ? imageDefaults : `${apiImage}original${poster_path}`}
        alt="poster"
        class="gallery-film__img"
        data-movie-id=${id}
        />
        </div>

        <div class="gallery-list__description">
        <h2 class="gallery-film__title">${title ? title : name}</h2>

        <div class="gallery-list__info">
        <p class="gallery-film__text"> ${genre_ids ? convertGanresByID(genre_ids) : " "} &#124; ${convertReliseDate(release_date, first_air_date)} <span class="gallery-film__raiting">${convertReiting(vote_average)}</span></p>
    </div>
    </div>
    </li>  `
        }

    

