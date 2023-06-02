import React from 'react';

const Summary = ({ booking }) => {
  return ( 
    <div className="container p20  movie-list">
    <div className="summary">
      <h2>Booking Summary</h2>
      <p>
        Movie: {booking.movieName}
        <br />
        Name: {booking.name}
        <br />
        Email: {booking.email}
      </p>
    </div>
    </div>
  );
};

export default Summary;
