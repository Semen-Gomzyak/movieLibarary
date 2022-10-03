import getRefs from '../refs/refs';

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


export function spinnerOff() {
    refs.backdropSpinnerRef.classList.add('visually-hidden');
  }
