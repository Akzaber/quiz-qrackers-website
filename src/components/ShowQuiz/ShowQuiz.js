import { useLoaderData } from 'react-router-dom';
import QuizesQ from '../QuizesQ/QuizesQ';

const ShowQuiz = () => {
  const showQuiz = useLoaderData().data.questions;
  const quizName = useLoaderData().data.name;
  console.log(showQuiz);
  return (
    <div className='py-4 bg-slate-100'>
      <h1 className='text-3xl font-bold text-black uppercase pb-4'>Quizes of {quizName}</h1>
      {
        showQuiz.map(quizsQ => <QuizesQ key={quizsQ.id} quizsQ={quizsQ}></QuizesQ>)
      }
    </div>
  );
};

export default ShowQuiz;