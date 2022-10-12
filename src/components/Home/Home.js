import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
  const quizes = useLoaderData().data;
  // console.log(quizes);
  return (
    <div>
      <div className="bg-[url('/src/quiz.jpg')] bg-no-repeat bg-cover h-[560px] pb-6 flex flex-col justify-center items-center brightness-80 min-h-screen">
        <h1 className='text-5xl font-bold bg-black p-1 rounded text-yellow-400'>Welcome To The Online Quiz</h1>
        <p className='text-xl font-bold text-white uppercase rounded bg-black p-1 mt-2'>Let's Start Your Online Journey With Quiz....!!!</p>
      </div>
      <div className='grid md:grid-cols-2 gap-4 py-9 bg-yellow-200'>
        {
          quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
        }
      </div>
    </div>
  );
};

export default Home;