import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({quiz}) => {
  const {id, logo, name} = quiz;
  const navigate = useNavigate();
  const handleQuiz = () => {
    navigate(`/quiz/${id}`)
  }
  return (
    <div className='bg-black rounded-md md:w-1/2 w-3/4 mx-auto'>
      <img className='w-full bg-black rounded' src={logo} alt="" />
      <p className='text-white py-3 uppercase'><strong>{name}</strong></p>
      <button onClick={handleQuiz} className='w-full bg-yellow-400 rounded py-2 font-bold text-black'>Open Quiz</button>
    </div>
  );
};

export default Quiz;