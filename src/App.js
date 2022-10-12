import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import ShowQuiz from './components/ShowQuiz/ShowQuiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async() => {
            return fetch('quizData.json')
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async() => {
            return fetch('quizData.json')
          },
          element: <Home></Home>
        },
        {
          path: '/quiz',
          loader: async() => {
            return fetch('quizData.json')
          },
          element: <Topics></Topics>
        },
        {
          path: '/quiz/:id',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <ShowQuiz></ShowQuiz>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ],
    },
    {
      path: '*',
      element: <div className='bg-yellow-400 text-black h-[600px] items-center flex justify-center flex-col gap-4'>
        <h1 className='text-5xl font-bold'>404<br />NOT FOUND</h1>
        <p>Sorry but the page that you requested dosen't exist.</p>
        <Link to='/'><button className='bg-blue-600 text-white font-bold py-2 px-4 rounded-md'>Back Home</button></Link>
      </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
