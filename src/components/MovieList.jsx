import React from 'react';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <div className='listcontainer'> 
        
        {movies.map((movie) => (

          <div key={movie.show.id} onClick={() => onSelectMovie(movie)}>

            <div className="container">
              <img
                src={movie?.show?.image?.medium??""}

              />
              <div className="container__text">
                <h1>{movie.show.name}</h1>
                <div className="container__text__star">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  {movie.show.rating.average} / 10
                </div>

                <div className="container__text__timing">

                  <div className="container__text__timing_time">
                    <p>{movie.show.schedule.days[0]}</p>
                    <p>{movie.show.schedule.time}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
