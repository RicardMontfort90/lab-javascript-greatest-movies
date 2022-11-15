// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(movie => movie.director);
    return directorsArray.filter((director, index) => index === directorsArray.indexOf(director));
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
      let arr1 = moviesArray.filter((el) => {
        return el.director === 'Steven Spielberg' && el.genre.includes('Drama');
      });
      return arr1.length;
    }
    
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scoresArray = moviesArray.map(movie => movie.score);
    const scoresArrayCleaned = scoresArray.filter(score => typeof score === 'number');
    const avgScore = scoresArrayCleaned.reduce((acc, val) => acc + val/scoresArray.length,0);
    return Number.parseFloat(avgScore.toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaScoresArray = moviesArray.filter(movie => movie.genre.includes('Drama')).map(movie => movie.score);
    const avgDramaScore = dramaScoresArray.reduce((acc, val) => acc + val/dramaScoresArray.length,0);
    return Number.parseFloat(avgDramaScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearlyOrderedMovies = JSON.parse(JSON.stringify(moviesArray));
    yearlyOrderedMovies.sort( (a ,b) => {
        if (a.year > b.year) {
            return 1;   
        }
        if (a.year < b.year) {
            return -1;  
        }
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            if (a.title === b.title) {
                return 0;
            }
        }
    });
    return yearlyOrderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
        let orMov = movies.sort(function (a, b) {
          if (a.title[0] < b.title[0]) return 1; 
          if (a.title[0] > b.title[0]) return -1; 
          if (a.title[0] === b.title[0]) return 0;
        });
        let twentyTi = orMov.slice(0, 19);
        return twentyTi;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
