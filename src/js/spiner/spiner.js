import getRefs from '../refs';

const refs = getRefs();

window.onload = function () {
  spinnerOn() 
};

export function spinnerOn() {
    refs.backdropSpinnerRef.classList.remove('visually-hidden');
  

  setTimeout(function () {
    refs.backdropSpinnerRef.classList.add('visually-hidden');
  }, 2000);
}