import getRefs from "../refs/refs";

const refs = getRefs()

export function choiseFetchTrendMovie() {
    refs.galleryListEL.classList.add("fetch__search");
  refs.galleryListEL.classList.remove("fetch__query");
  refs.galleryListEL.classList.remove("fetch__soon-relise");
  refs.galleryListEL.classList.remove("fetch__rating");
  refs.galleryListEL.classList.remove("fetch__year");
  refs.galleryListEL.classList.remove("fetch__genres");
}

export function choiseFetchQueryMovie() {
  refs.galleryListEL.classList.remove("fetch__search");
  refs.galleryListEL.classList.add("fetch__query");
  refs.galleryListEL.classList.remove("fetch__soon-relise");
  refs.galleryListEL.classList.remove("fetch__rating");
  refs.galleryListEL.classList.remove("fetch__genres");
  refs.galleryListEL.classList.remove("fetch__year");
}


export function choiseFetchSoonRelise() {
  refs.galleryListEL.classList.remove("fetch__search");
  refs.galleryListEL.classList.remove("fetch__query");
  refs.galleryListEL.classList.add("fetch__soon-relise");
  refs.galleryListEL.classList.remove("fetch__rating");
  refs.galleryListEL.classList.remove("fetch__genres");
  refs.galleryListEL.classList.remove("fetch__year");
}

export function choiseFetchRating() {
  refs.galleryListEL.classList.remove("fetch__search");
  refs.galleryListEL.classList.remove("fetch__query");
  refs.galleryListEL.classList.remove("fetch__soon-relise");
  refs.galleryListEL.classList.add("fetch__rating");
  refs.galleryListEL.classList.remove("fetch__genres");  
  refs.galleryListEL.classList.remove("fetch__year");
}


export function choiseFetchGenres()
{
  refs.galleryListEL.classList.remove("fetch__search");
  refs.galleryListEL.classList.remove("fetch__query");
  refs.galleryListEL.classList.remove("fetch__soon-relise");
  refs.galleryListEL.classList.remove("fetch__rating");
  refs.galleryListEL.classList.add("fetch__genres");
  refs.galleryListEL.classList.remove("fetch__year");
}

export function choiseFetchYear()
{
  refs.galleryListEL.classList.remove("fetch__search");
  refs.galleryListEL.classList.remove("fetch__query");
  refs.galleryListEL.classList.remove("fetch__soon-relise");
  refs.galleryListEL.classList.remove("fetch__rating");
  refs.galleryListEL.classList.remove("fetch__genres");
  refs.galleryListEL.classList.add("fetch__year");
}

export function choiseFetchYearAndGenres()
{
  refs.galleryListEL.classList.remove("fetch__search");
  refs.galleryListEL.classList.remove("fetch__query");
  refs.galleryListEL.classList.remove("fetch__soon-relise");
  refs.galleryListEL.classList.remove("fetch__rating");
  refs.galleryListEL.classList.add("fetch__genres");
  refs.galleryListEL.classList.add("fetch__year");
}