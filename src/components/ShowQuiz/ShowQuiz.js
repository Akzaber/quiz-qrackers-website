import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowQuiz = () => {
  const showQuiz = useLoaderData().data.questions;
  console.log(showQuiz);
  return (
    <div>
      <h1 className='text-4xl font-bold'>Write Here In Detail</h1>
      {
        
      }
    </div>
  );
};

export default ShowQuiz;