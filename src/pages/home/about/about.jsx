import React from 'react';
import { useParams } from 'react-router-dom';

const movieData = [
  { name: 'drive', image: 'proxy-image (1).jpeg', trailer: 'https://www.youtube.com/watch?v=KBiOF3y1W0Y' },
  { name: 'the batman', image: 'proxy-image (2).jpeg', trailer: 'https://www.youtube.com/watch?v=mqqft2x_Aa4' },
  { name: 'fight club', image: 'proxy-image (3).jpeg', trailer: 'https://www.youtube.com/watch?v=SUXWAEX2jlg' },
  { name: 'Taxi driver', image: 'proxy-image (4).jpeg', trailer: 'https://www.youtube.com/watch?v=UUxD4-dEzn0' },
  { name: 'the godfather', image: 'proxy-image (5).jpeg', trailer: 'https://www.youtube.com/watch?v=sY1S34973zA' },
  { name: 'blade runner 2049', image: 'proxy-image (6).jpeg', trailer: 'https://www.youtube.com/watch?v=gCcx85zbxz4' },
  { name: 'joker', image: 'proxy-image.jpeg', trailer: 'https://www.youtube.com/watch?v=zAGVQLHvwOY' },
];

const About = () => {
  const { id } = useParams();
  const movie = movieData[parseInt(id)];

  if (!movie) return <div className="text-white p-10">Movie not found.</div>;

  return (
    <div className='bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% min-h-screen py-18'>
      <section className="flex flex-col md:flex-row items-center max-w-6xl m-auto py-16 px-6 gap-10 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <img
          src={`/src/images/${movie.image}`}
          alt={movie.name}
          className="w-72 rounded-lg shadow-lg"
        />

        <div className="max-w-xl">
          <h1 className="text-4xl font-light text-yellow-500 mb-4">{movie.name}</h1>
          <p className="text-gray-300 text-lg mb-4">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae soluta mollitia possimus eveniet totam a quidem repudiandae nulla, odit, eligendi expedita numquam ex eaque consequatur facilis, modi magni. Dolores, voluptatibus! <strong>{movie.name}</strong>.
          </p>
          <a
            href={movie.trailer}
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
