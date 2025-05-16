
import React from 'react';

const About0 = () => {
  return (
     <div className='bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% h-174 py-18  ' >
      <section class="flex md:flex-row items-center max-w-6xl m-auto py-16 px-6 gap-10 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black" >
    <img src={('/src/images/proxy-image (4).jpeg')} alt="Drive Movie Poster"
         class="w-72 rounded-lg shadow-lg" />

    <div class="max-w-xl">
      <h1 class="text-4xl font-light text-yellow-500 mb-4">taxi driver</h1>
      <p class="text-gray-300 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, ea earum. Sint, minima necessitatibus culpa totam blanditiis dicta consectetur, alias obcaecati excepturi dolores aut! Soluta doloremque deleniti eaque possimus magnam!      </p>
      <a href="https://www.youtube.com/watch?v=KBiOF3y1W0Y" target="_blank"
         className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-600 font-bold text-black px-6 py-2 rounded transition duration-300">
         Watch Trailer
      </a>
      <a href='/'
         className='inline-block mt-6 mx-1.5 bg-amber-800 cursor-pointer font-bold hover:bg-yellow-600 text-black px-6 py-2 rounded transition duration-300'>
        back to home
      </a>
    </div>
  </section>

    </div>
  );
};

export default About0;
