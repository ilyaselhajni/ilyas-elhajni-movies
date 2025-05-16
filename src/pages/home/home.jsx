import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useMovieContext } from '../../context/context';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { movies, selectMovie } = useMovieContext();

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% flex flex-col p-3 min-h-screen'>
      
      <div className='flex shadow-2xl items-center h-14 bg-gradient-to-r from-gray-600 to-amber-950 w-80 rounded-2xl m-auto px-5 hover:scale-105 transition-transform duration-300'>
        <input
          type="search"
          placeholder='Enter the movie name...'
          className='border-none w-full font-bold text-amber-50 bg-transparent outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className='text-white ml-2' />
      </div>

      <section className="mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {filteredMovies.map((movie, index) => (
            <Link 
              to="/about" 
              key={index}
              onClick={() => selectMovie(index)}
            >
              <div className="relative overflow-hidden rounded-2xl h-[320px] group">
                <img
                  src={`../../src/images/${movie.image}`}
                  alt={movie.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition duration-300">
                  <h4 className="text-yellow-400 font-semibold mb-1 flex items-center gap-1">
                    <GiClick /> {movie.name}
                  </h4>
                  <p className="text-sm">Click to see movie trailer and resume</p>
                </div>
              </div>
            </Link>
          ))}

          {filteredMovies.length === 0 && (
            <p className="col-span-full text-center text-gray-400 mt-10">No movies found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
