// import logo from './logo.svg';

import React from 'react';
import './App.css';
import Animal from './components/animal/animal';


const App = () => {
  return (
    <div className='body__wrapper'>
      <Animal
        img='https://images.theconversation.com/files/290710/original/file-20190903-175663-lqb3z6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
        name='Monkey' />
      <Animal
        img='https://i.pinimg.com/originals/c5/d6/6a/c5d66aa224f958d90a1c66f031fec857.jpg'
        name='Wolf' />
      <Animal
        img='https://images.wsj.net/im-196181?width=1280&size=1'
        name='Tigre' />
    </div>
  );
}

export default App;
