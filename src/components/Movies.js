import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
      <div>
        <h1>Movies Page</h1>
        {movies.map((movie) => <div className="movie">
          <ul>{movie.title} 
          {movie.time} 
            <ul>{movie.genres}</ul>
          {movie.metascore}
          </ul>
        </div>)}
      </div>
   
  );
};

export default Movies;
