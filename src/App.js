// import logo from './logo.svg';

import React from 'react';
import './App.css';
import Animal from './components/animal/animal';

let animals = [
  { name: 'Կապիկ', alt: 'Monkey', img: 'https://images.theconversation.com/files/290710/original/file-20190903-175663-lqb3z6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' },
  { name: 'Գայլ', alt: 'Wolf', img: 'https://i.pinimg.com/originals/c5/d6/6a/c5d66aa224f958d90a1c66f031fec857.jpg' },
  { name: 'Վագր', alt: 'Tigre', img: 'https://images.wsj.net/im-196181?width=1280&size=1' },
  { name: 'Օձ', alt: 'Snake', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVS4Ujooi7iXnqO3aONfiTs0BXEdCMFulqtg&usqp=CAU' },
  { name: 'Պանդա', alt: 'Panda', img: 'https://bigenc.ru/media/2016/10/27/1235152791/3765.jpg' },
  { name: 'Գետաձի', alt: 'Hipopotam', img: 'https://i1.sndcdn.com/artworks-000198853939-mcqvwv-t500x500.jpg' },
  { name: 'Փիղ', alt: 'Elephant', img: 'https://images.theconversation.com/files/62656/original/nrtfqxhv-1414079052.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' },
  { name: 'Արջ', alt: 'Bear', img: 'https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/07/30/grizzly-spotting-wildlife_s.jpg?itok=zBcVUiua' },
  { name: 'Թութակ', alt: 'Parrot', img: 'https://images.theconversation.com/files/86375/original/image-20150625-12984-1416ek3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' },

]



const App = () => {


  let animalsMapComp = animals.map((animal) => {
    return (
      <Animal
        img={animal.img}
        name={animal.name}
        alt={animal.alt} />
    )
  })




  return (
    <div className='body__wrapper'>
      {animalsMapComp}
    </div>
  );
}

export default App;
