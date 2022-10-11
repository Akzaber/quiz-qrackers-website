import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizesQ = ({quizsQ}) => {

  const {id, correctAnswer, options, question} = quizsQ;

    const success = () => toast.success(' Your Answer is Correct!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });

    const error = () => toast.error(' You Answer is Incorrect!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      const showAnswer = () => toast.info( `Answer: ${correctAnswer}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

  const handleShow = () => {
    showAnswer();
  }


  const handleCorrect = (option) => {
    if(option === correctAnswer){
      success();
    }
    else{
      error();
    }
  }

  
  return (
    <div className='bg-blue-900 rounded-md w-9/12 mx-auto mb-4 p-2 text-white'>
      <div className='flex justify-between items-center'>
        <p><strong>Question: {question.slice(3, -4)}</strong></p>
        <button onClick={handleShow}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
      </div>
     <div className='grid md:grid-cols-2 mx-auto'>
        {
          options.map((option, index) => 
              <div key={index} className='border border-white m-2 rounded-md text-left p-5'>
              <button onClick={() => handleCorrect(option)}><input type="radio" name={id} value={option} id={option} />
              </button>
              <label htmlFor={option}>{option}</label>
              <ToastContainer>
              
              </ToastContainer>
                </div>
            )
        }
     </div>
    </div>
  );
};

export default QuizesQ;