import { Home } from './Home';
import { Blog } from './Blog';
import { Contact } from './Contact';
import { Projects } from './Projects';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='window-container'>
        <div className='title-bar'>
          <div className='title-text'>www.marcus.me</div>
          <button className='help-button'><strong>?</strong></button>
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
