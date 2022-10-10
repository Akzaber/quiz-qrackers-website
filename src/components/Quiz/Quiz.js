import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({quiz}) => {
  const {id, logo, name} = quiz;
  const navigate = useNavigate();
  const handleQuiz = () => {
    navigate(`/quiz/${id}`)
  }
  return (
    <div className='rounded-md bg-slate-900 w-1/2 mx-auto border-b-4 border-b-black'>
      <img className='w-full' src={logo} alt="" />
      <p className='text-white my-3'><strong>{name}</strong></p>
      <button className='w-full bg-slate-100 rounded-md py-2 font-bold'>Open Quiz</button>
    </div>
  );
};

export default Quiz;