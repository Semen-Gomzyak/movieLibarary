import { genreIds } from './genresList'

export function convertGanres(ganres) {
    let allGenres = [];

    for (const value of genreIds) {
        for (const ganre of ganres) {
            if (value.id === ganre) {
            allGenres.push(` ${value.name}`)   
           }
        }
        
    }

  return allGenres;
}