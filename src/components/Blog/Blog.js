import React from 'react';

const Blog = () => {
  return (
    <div className='bg-slate-200 py-6 pb-10 flex gap-4 flex-col'>
      <div className='md:w-3/4 w-11/12 mx-auto bg-white text-left p-4 rounded drop-shadow-md'>
        <h3><strong>Question: What is the purpose of React Router?</strong></h3>
        <p><strong>Answer:</strong> The Main Purpose of the React Router is it's mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
      </div>
      <div className='md:w-3/4 w-11/12 mx-auto bg-white text-left p-4 rounded drop-shadow-md'>
        <h3><strong>Question: How Does Context API works?</strong></h3>
        <p><strong>Answer:</strong> At First you have to Declare React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
      </div>
      <div className='md:w-3/4 w-11/12 mx-auto bg-white text-left p-4 rounded drop-shadow-md'>
        <h3><strong>Question: How Does React useRef hook works?</strong></h3>
        <p><strong>Answer:</strong> The useRef hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: useRef(0).</p>
      </div>
    </div>
  );
};

export default Blog;