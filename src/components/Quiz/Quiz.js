import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({quiz}) => {
  const {id, logo, name} = quiz;
  const navigate = useNavigate();
  const handleQuiz = () => {
    navigate(`/quiz/${id}`)
  }
  return (
    <div className='rounded-md bg-slate-900 md:w-1/2 w-3/4 mx-auto pb-1'>
      <img className='w-full' src={logo} alt="" />
      <p className='text-white my-3'><strong>{name}</strong></p>
      <button onClick={handleQuiz} className='w-full bg-yellow-500 rounded-t-md py-2 font-semibold text-white'>Open Quiz</button>
    </div>
  );
};

export default Quiz;