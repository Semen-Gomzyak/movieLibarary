export default function getRefs () {
    return {
        galleryListEL: document.querySelector('.gallery-film__list'),
        paginationList: document.querySelector('.pagination'),
        searchEL: document.querySelector('.search-form'),
        searchValueElement: document.querySelector('.search-form__input'),
        backdropSpinnerRef: document.querySelector('.backdrop-spinner'),
    }
}