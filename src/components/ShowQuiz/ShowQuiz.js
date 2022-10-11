import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizesQ from '../QuizesQ/QuizesQ';

const ShowQuiz = () => {
  const showQuiz = useLoaderData().data.questions;
  // console.log(showQuiz);
  return (
    <div>
      <h1 className='text-4xl font-bold'>Write Here In Detail</h1>
      {
        showQuiz.map(quizsQ => <QuizesQ key={quizsQ.id} quizsQ={quizsQ}></QuizesQ>)
      }
    </div>
  );
};

export default ShowQuiz;