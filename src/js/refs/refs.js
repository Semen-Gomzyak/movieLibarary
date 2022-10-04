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
        galleryListToOpenModal: document.querySelector('.backdrop'), 
        galleryListCloseModal: document.querySelector('.modal__close-button'),
        modalBoxForOneFilmEl: document.querySelector('.modal__box'),
        modalBackdropRef: document.querySelector('.backdrop'),
        
        modalAddWatchedBtn: document.querySelector('.add-to-watched-button'),
        modalAddTrialerBtn: document.querySelector('.add-to-trailer-button'),
        modalRemoveWatchedBtn: document.querySelector('.remove-to-watched-button'),
    }
}