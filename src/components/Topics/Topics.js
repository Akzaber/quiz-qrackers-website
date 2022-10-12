import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
  const quizes = useLoaderData().data;
  return (
    <div className='bg-slate-100'>
      <h1 className='text-3xl font-bold py-6 text-black uppercase'>Let's Choose Your Topic And Explore Quiz !!!</h1>
      <div className='grid md:grid-cols-2 gap-4 pb-9'>
        {
          quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
        }
      </div>
    </div>
  );
};

export default Topics;