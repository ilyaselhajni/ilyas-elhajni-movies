import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../../../context/context';

const About = () => {
  const { selectedMovie } = useMovieContext();
  const navigate = useNavigate();

  if (!selectedMovie) {
    React.useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  return (
    <div className='bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% min-h-screen py-18'>
      <section className="flex flex-col md:flex-row items-center max-w-6xl m-auto py-16 px-6 gap-10 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <img
          src={`/src/images/${selectedMovie.image}`}
          alt={selectedMovie.name}
          className="w-72 rounded-lg shadow-lg"
        />

        <div className="max-w-xl">
          <h1 className="text-4xl font-light text-yellow-500 mb-4">{selectedMovie.name}</h1>
          <p className="text-gray-300 text-lg mb-4">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae soluta mollitia possimus eveniet totam a quidem repudiandae nulla, odit, eligendi expedita numquam ex eaque consequatur facilis, modi magni. Dolores, voluptatibus! <strong>{selectedMovie.name}</strong>.
          </p>
          <a
            href={selectedMovie.trailer}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 bg-yellow-500 hover:bg-yellow-600 font-bold text-black px-6 py-2 rounded transition duration-300"
          >
            Watch Trailer
          </a>
          <a
            href="/"
            className="inline-block mt-4 ml-3 bg-amber-800 font-bold hover:bg-yellow-600 text-black px-6 py-2 rounded transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
