import { Home } from './Home';
import { Blog } from './Blog';
import { Projects } from './Projects';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  // let dragItem = document.getElementById("#title-drag");
  // let container = document.getElementById("#draggable");
  // let active = false;
  // let currentX;
  // let currentY;
  // let initialX;
  // let initialY;
  // let xOffset = 0;
  // let yOffset = 0;

  // const [drag, setDrag] = useState(false);

  // const dragTitle = () => {
  //   if (drag === true) {
  //     console.log('true!')
  //   }
  // }

  return (
    <BrowserRouter>
    <div className="App">

        {/* <div className='title-bar' id='title-drag' onMouseDown={(event) => {event.preventDefault(); setDrag(true); dragTitle()}}>
          <div className='title-text'>www.marcus.me</div>
          <button className='help-button'><strong>?</strong></button>
        </div> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
