import { genreIds } from '../genres/genresList';
import { changeGenres } from '../api/api';

export function convertReliseDate(release_date, first_air_date) {

  if (release_date === undefined && first_air_date === undefined
    || release_date === "" && first_air_date === undefined
  || release_date === undefined && first_air_date === "") {  
      return ""
  }
  
  
  return release_date ? Number(release_date.slice(0, 4)) : Number(first_air_date.slice(0, 4));
}

export function convertReiting(vote_average) {

  if (vote_average === undefined || vote_average === "") {  
      return "0"
  }
  
  return vote_average ?vote_average : "0";
}


export function convertGanresByID(genres) {
    let allGenres = [];

  for (const value of genreIds) {
    for (const genre of genres) {
          if (genres === undefined) {
            return allGenres = "";
      }
      
            if (value.id === genre) {
            allGenres.push(` ${value.name}`)   
          }
          
          
        }
        
    }

  return allGenres;
}

export function convertGanresByName(genres) {
  let genre = [];
  for (const value of genres) {
    genre.push(`${value.name}`)
      }
        
  return genre
}