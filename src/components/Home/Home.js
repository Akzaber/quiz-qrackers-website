import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
  const quizes = useLoaderData().data;
  console.log(quizes);
  return (
    <div>
      <div className="bg-[url('/src/quiz.jpg')] bg-no-repeat bg-cover h-[560px] mb-6 flex flex-col justify-center items-center brightness-80 min-h-screen">
        <h1 className='text-5xl font-bold text-blue-500'>Welcome To The Online Quiz</h1>
        <p className='text-xl text-blue-100 mt-2'>Lets Start Your Online Journey With Quiz....</p>
      </div>
      <div className='grid md:grid-cols-2 gap-4 mb-9'>
        {
          quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
        }
      </div>
    </div>
  );
};

export default Home;