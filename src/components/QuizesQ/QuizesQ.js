import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizesQ = ({quizsQ}) => {

  const {id, correctAnswer, options, question} = quizsQ;

  const notify = () => toast.success('🦄 Your Answer is Correct!', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });


  const handleCorrect = (option) => {
    if(option === correctAnswer){
      notify();
    }
  }
  
  return (
    <div className='bg-blue-900 rounded-md w-9/12 mx-auto mb-4 p-2 text-white'>
      <div>
        <p><strong>Question: {question}</strong></p>
        
      </div>
     <div className='grid grid-cols-2 mx-auto'>
        {
          options.map((option, index) => 
              <div key={index} className='border border-white m-2 rounded-md text-left p-5'>
              <button onClick={() => handleCorrect(option,)}><input type="radio" name={id} value={option} id={option} />
              <label htmlFor={option}>{option}</label></button>
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