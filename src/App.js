import { Home } from './Home';
import { Blog } from './Blog';
import { Contact } from './Contact';
import { Projects } from './Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        Welcome
      </header> */}
      <div className='window-container'>
        <div className='title-bar'>
          <div className='title-text'>www.marcus.me</div>
          <button className='help-button'>?</button>
        </div>
        
          <menu role="tablist">
            <li role="tab" selected="true" label="Home"><a href="/">Home</a></li>
            <li role="tab" selected="false" label="Blog"><a href="/blog">Blog</a></li>
            <li role="tab" selected="false" label="Projects"><a href="/projects">Projects</a></li>
            <li role="tab" selected="false" label="Contact"><a href="/contact">Contact</a></li>
          </menu>
          
        </div>
      
      {/* <ul>
        <li><Home /></li>
        <li><Blog /></li>
        <li> <Contact /></li>
        <li><Projects /></li>
      </ul> */}

    </div>
  );
}

export default App;
