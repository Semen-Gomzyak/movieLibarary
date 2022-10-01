const apiImage = "https://image.tmdb.org/t/p/";
import imageDefaults from '../images/broken-img.jpg';
import { convertGanres } from './genres/getGanresName';

export function createMarkupGalleryElement({id, title, poster_path, genre_ids, release_date, vote_average}) {

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
        <h2 class="gallery-film__title">${title}</h2>

        <div class="gallery-list__info">
        <p class="gallery-film__text"> ${convertGanres(genre_ids)} &#124; ${release_date ? Number(release_date.slice(0, 4)) : ""} </p>
    </div>
    </div>
    </li>  `
}