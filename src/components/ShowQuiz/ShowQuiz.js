import { useLoaderData } from 'react-router-dom';
import QuizesQ from '../QuizesQ/QuizesQ';

const ShowQuiz = () => {
  const showQuiz = useLoaderData().data.questions;
  const quizName = useLoaderData().data.name;
  console.log(showQuiz);
  return (
    <div className='my-4'>
      <h1 className='text-3xl font-bold text-blue-500 pb-4'>Quiz of {quizName}</h1>
      {
        showQuiz.map(quizsQ => <QuizesQ key={quizsQ.id} quizsQ={quizsQ}></QuizesQ>)
      }
    </div>
  );
};

export default ShowQuiz;