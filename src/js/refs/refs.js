export default function getRefs () {
    return {
        galleryListEL: document.querySelector('.gallery-film__list'),
        paginationList: document.querySelector('.pagination'),
        searchEL: document.querySelector('.search-form'),
        searchValueElement: document.querySelector('.search-form__input'),
        backdropSpinnerRef: document.querySelector('.backdrop-spinner'),
        soonReliseButtonEl: document.querySelector('.button__soon-relise'),
        ratingButtonEl: document.querySelector('.button__rating'),
        filterGenres: document.querySelector('.filter__input--genre'),
        yearFilter: document.querySelector('.filter__input--year'),
        filterGenresChoose: document.querySelector('.filter__option-choose--genre'),
    }
}