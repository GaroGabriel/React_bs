// import logo from './logo.svg';

import React from 'react';
import './App.css';
import Animal from './components/animal/animal';


const App = () => {
  return (
    <div className='body__wrapper'>
      <Animal
        img='https://images.theconversation.com/files/290710/original/file-20190903-175663-lqb3z6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
        name='monkey' />
      <Animal
        img='https://images.theconversation.com/files/290710/original/file-20190903-175663-lqb3z6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
        name='monkey' />
      <Animal
        img='https://images.theconversation.com/files/290710/original/file-20190903-175663-lqb3z6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
        name='monkey' />
    </div>
  );
}

export default App;
