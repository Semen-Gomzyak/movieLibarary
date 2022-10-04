// // import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // import { getResultData } from '../popular-movies/data-result';
// import { getFilmID } from "../modal/open-modal";
// const result = [];

// export function setResultData(data) {
//   data.forEach(element => {
//     result.push(element);
//   });
// }

// export function getResultData() {
//   return result;
// }

// export function clearResultData() {
//   if (!result == []) {
//     result.splice(0, result.length);
//   }
// }

// const STORAGE_KEY_WATCHED = 'watched-films';
// const STORAGE_KEY_QUEUE = 'queue-films';
// // const result = getResultData();

// let filmsWatched = [];
// let filmsQueue = [];

// if (localStorage.getItem(STORAGE_KEY_WATCHED) != null) {
//   filmsWatched = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
// }

// if (localStorage.getItem(STORAGE_KEY_QUEUE) != null) {
//   filmsQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
// }

// // Notify.init({
// //   width: '350px',
// //   position: 'center-top',
// //   timeout: 1000,
// //   success: {
// //     background: '#ff6b01',
// //   },
// //   info: {
// //     background: '#eb150c',
// //   },
// // });

// export function onBtnWatchedClick() {


//   const filmId = document.querySelector('.modal').getAttribute('data-movie-id');
//     const currentFilm = result.find(el => el.id === Number(getFilmID()));
    
//     console.log(getFilmID())
// console.log(filmId)
//     console.log(currentFilm)
//     if (filmsWatched === undefined) {
//       if (filmsWatched.every(el => el.id !== Number(getFilmID()))) {
//       filmsWatched.push(getFilmID());
//     //   Notify.success('The movie has been added to the list of watched.');
//       console.log("The movie has been added to the list of watched.")
//         }
        
//         return
//   } else {
//     //   Notify.info('The movie has already been added to watched.');
//       console.log("The movie has already been added to watched.")
//   }

//   localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(filmsWatched));
// }

// export function onBtnQueueClick() {
//   const filmId = document.querySelector('.modal').getAttribute('data-movie-id');
//   const currentFilm = result.find(el => el.id === Number(getFilmID()));
//   if (filmsQueue.every(el => el.id !== Number(getFilmID()))) {
//     //   Notify.success('The movie has been added to the list of queue.');
//       console.log("The movie has been added to the list of watched.")
//     filmsQueue.push(currentFilm);
//   } else {
//     //   Notify.info('The movie has already been added to queue.');
//       console.log("The movie has already been added to watched.")
//   }

//   localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(filmsQueue));
// }



// // const LOCALSTORAGE_KEY_QUEUE = "QUEUE";
// // const LOCALSTORAGE_KEY_WATCHED = "WATCHED";

// // export function saveLocalStorage (key, value) {
// //   try {
// //     const serializedState = JSON.stringify("550");
// //       const change = localStorage.setItem(LOCALSTORAGE_KEY_QUEUE, serializedState);

// //       console.log(change)
// //   } catch (error) {
// //     console.error('Set state error: ', error.message);
// //   }
// // };

// // export function loadLocalStorage (key) {
// //   try {
// //     const serializedState = localStorage.getItem(key);
// //     return serializedState === null ? undefined : JSON.parse(serializedState);
// //   } catch (error) {
// //     console.error('Get state error: ', error.message);
// //   }
// // };

// // export function getFirstKey() {
    
// //     return  LOCALSTORAGE_KEY_QUEUE
// // }

// // export function getSecondKey(){
// //   return  LOCALSTORAGE_KEY_WATCHED
// // }
