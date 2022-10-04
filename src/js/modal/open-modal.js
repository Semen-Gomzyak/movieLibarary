import getRefs from "../refs/refs";
import {fetchOneFilm} from "../api/fetchDistribution"
const refs = getRefs();
import {getFirstKey, getSecondKey, loadLocalStorage, onBtnWatchedClick} from '../storage/localStorage'

refs.galleryListEL.addEventListener("click", clickForFilm);

let result = [];
let filmClickID = 0;

let watched = [];

export function getFilmID() {
    return filmClickID
}
export function clickForFilm(evt) {
    evt.preventDefault()

    const filmID = evt.target.dataset.movieId;
    refs.galleryListToOpenModal.classList.remove("visually-hidden");
    window.addEventListener('keydown', onEscKeyPress);
    filmClickID = filmID
    fetchOneFilm(filmID)
    setInterval(modalOpen(), 3000)
}

export function onBackDropClick(event) {
  if (event.target === refs.modalBackdropRef) {
    closeModal()
  }
}

function modalOpen() {
    if (localStorageFindID()) {
        console.log("true")

    }

   return refs.modalBoxForOneFilmEl.addEventListener('click', modalOneFilmClose);
}

const LOCALSTORAGE_KEY_QUEUE = "QUEUE";
const LOCALSTORAGE_KEY_WATCHED = "WATCHED";

export function localStorageGet() {
    const localGet = localStorage.getItem(LOCALSTORAGE_KEY_WATCHED);
    console.log(localGet)

    return localGet
}

export function localStorageFindID() {
    try {
    watched = JSON.parse(localStorageGet());
    for (const value of watched) {
        if (Number(value) === Number(getFilmID())) {
             
             console.log("find")
            return refs.modalAddWatchedBtn.textContent = "REMOVE FROM WATCHED";
        }
    }
    
} catch (error) {
    console.log(error)
}
    
}


export function modalOneFilmClose(evt) {
if (evt.target.localName !== "button") {
        return
    }

    
    // if (evt.targer !== "Button")
    // {
    //     console.log("not button")
    //     }
    // console.log(refs.modalAddWatchedBtn)
    // console.log(refs.modalAddWatchedBtn)
    //     if (localStorageFindID()) {
    //     refs.modalAddWatchedBtn.textContent = "REMOVE FROM WATCHED";

    // }


    if (evt.target.classList.contains("modal__icon-close") || evt.target.classList.contains("modal__close-button")) {
        closeModal()

        result.push(getFilmID());
            
        localStorage.setItem(LOCALSTORAGE_KEY_WATCHED, `[${result}]`)
    }

    
    // if (evt.target.classList.contains("add-to-trailer-button")) {
         
    // }

    // if (!loadLocalStorage(getSecondKey())) {
        
        

    // if (loadLocalStorage(getSecondKey())) {
    //     evt.target.textContent = "REMOVE FROM WATCHED";
        
    //     if (evt.target.classList.contains("add-to-watched-button")) {
    //     saveLocalStorage(getSecondKey(), "550")
    //     }
        
    //     return
    // }

    

    // if (evt.target.classList.contains("add-to-queue-button")) {
    //     getFirstKey()
        
    // }
    
}










export function onEscKeyPress(evt) {
    if (evt.key === "Escape") {
        closeModal()
        window.removeEventListener('keydown', onEscKeyPress);
    }
}
    
export function closeModal(){
    refs.galleryListToOpenModal.classList.add("visually-hidden");
    window.removeEventListener('keydown', onEscKeyPress);
}

