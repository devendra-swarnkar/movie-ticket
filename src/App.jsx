import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Summary from './components/Summary';
import MovieForm from './components/MovieForm';
import axios from 'axios';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [booking, setBooking] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setBooking(null);
  };

  const handleBookMovie = (data) => {
    setBooking(data);
  };
  useEffect(() => {
   
  });

  const search = (e)=>{
    axios({
      'method':'GET',
      'url':'https://api.tvmaze.com/search/shows',
      
      'params': {
          'q':e,
      },
    }).then(data=>{
      setBooking(null);
      setSelectedMovie(null);
      setMovies(data.data);
      console.log(data);
    })
  }
  
  return (
    
    <div className="app">
    <div className='App-header'>
    <h1>Movie Booking App</h1>
    </div>
    <div className ="searchblock">
            <input type ="string" onChange={(e) => search(e.target.value)} className="searchbar" placeholder=' Search Movie Name'></input>

    </div>
    
      {selectedMovie ? (
        <>
          <MovieDetails movie={selectedMovie} />
          {booking ? (
            <Summary booking={booking} />
          ) : (
            <MovieForm movie={selectedMovie} onBook={handleBookMovie} />
          )}
        </>
      ) : (
        <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
      )}
    </div>
  );
};

export default App;

