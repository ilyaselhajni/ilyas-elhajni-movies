import React, { createContext, useState, useContext } from 'react';

// Movie data array
export const movieData = [
  { name: 'drive', image: 'proxy-image (1).jpeg', trailer: 'https://www.youtube.com/watch?v=KBiOF3y1W0Y' },
  { name: 'the batman', image: 'proxy-image (2).jpeg', trailer: 'https://www.youtube.com/watch?v=mqqft2x_Aa4' },
  { name: 'fight club', image: 'proxy-image (3).jpeg', trailer: 'https://www.youtube.com/watch?v=SUXWAEX2jlg' },
  { name: 'Taxi driver', image: 'proxy-image (4).jpeg', trailer: 'https://www.youtube.com/watch?v=UUxD4-dEzn0' },
  { name: 'the godfather', image: 'proxy-image (5).jpeg', trailer: 'https://www.youtube.com/watch?v=sY1S34973zA' },
  { name: 'blade runner 2049', image: 'proxy-image (6).jpeg', trailer: 'https://www.youtube.com/watch?v=gCcx85zbxz4' },
  { name: 'joker', image: 'proxy-image.jpeg', trailer: 'https://www.youtube.com/watch?v=zAGVQLHvwOY' },
];

// Create the context
const MovieContext = createContext();

// Create a provider component
export const MovieProvider = ({ children }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  
  // Get the selected movie based on ID
  const selectedMovie = selectedMovieId !== null ? movieData[selectedMovieId] : null;
  
  // Function to select a movie by ID
  const selectMovie = (id) => {
    setSelectedMovieId(id);
  };
  
  return (
    <MovieContext.Provider value={{ 
      movies: movieData, 
      selectedMovie, 
      selectedMovieId,
      selectMovie 
    }}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook to use the movie context
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};