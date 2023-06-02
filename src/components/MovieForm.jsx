import React, { useState } from 'react';

const MovieForm = ({ movie, onBook }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let booking = {
      movieName: movie.show.name,
      name,
      email,
    }
    onBook(booking);
    localStorage.setItem("booking", JSON.stringify(booking));
  };

  return (
    <div className="movie-list ">
    <div className='container p20'>
      <form onSubmit={handleSubmit}>
      <h1>Book {movie.title} Movie</h1>
      <div>
        <label htmlFor="name"><h2><b>Name:</b></h2></label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email"><h2><b>Email:</b></h2></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className='btn'>Book Now</button>
    </form>
    </div>
    </div>
  );
};

export default MovieForm;
