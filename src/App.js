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
            <li role="tab" selected="false" label="Blog"><a href="/blog">Musings</a></li>
            <li role="tab" selected="false" label="Projects"><a href="/projects">Projects</a></li>
            {/* <li role="tab" selected="false" label="Contact"><a href="/contact">Contact</a></li> */}
          </menu>
        
        <div className='main-content-container' role="tabpanel">
          <div className='main-content' >
            <h4>Welcome to my home on the World Wide Web! 🌐</h4>
            <ul className='home-tree'>
              <li>Musings</li>
              <li>Work and Interests</li>
                <ul>
                  <li>Copy editor ✒️</li>
                  <li>Software developer 💾</li>
                  <li>News 🗞️</li>
                  <li>Skiing ⛷️</li>
                </ul>
              
              {/* <li>Work and Interests
                <ul>
                  <li>Copy editor ✒️</li>
                  <li>Software developer 💾</li>
                  <li>News 🗞️</li>
                  <li>Skiing ⛷️</li>
                </ul>
              </li> */}
              <li>
                <details closed>
                  <summary>Links:</summary>
                  <ul>
                    <li>Github 🤖</li>
                    <li>Email ✉️</li>
                    <li>LinkedIn 🔗</li>
                  </ul>
                </details>
                {/* <ul>
                  <li>Github 🤖</li>
                  <li>Email ✉️</li>
                  <li>LinkedIn 🔗</li>
                </ul> */}
              </li>
            </ul>
          </div>
          
        </div>
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
