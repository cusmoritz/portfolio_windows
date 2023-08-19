import React from "react";

export const Home = () => {
    return (
        <>
          <div className='title-bar' id='title-drag'>
            <div className='title-text'>www.marcus.me</div>
            <button className='help-button'><strong>?</strong></button>
          </div>
        <menu role="tablist">
            <li 
                role="tab" 
                selected={true}
                aria-selected="true" 
                label="Home">
                    <a href="/">Home</a>
            </li>
            <li 
                role="tab" 
                selected={false} 
                aria-selected="false" 
                label="Blog">
                    <a href="/blog">Musings</a>
            </li>
            <li 
                role="tab" 
                selected={false}
                aria-selected="false" 
                label="Projects">
                    <a href="/projects">Projects</a>
            </li>
        </menu>

        <div className='main-content-container' role="tabpanel">
          <div className='main-content' >
            <h2>Welcome to my home on the World Wide Web! 🌐</h2>
            <ul className='home-tree'>
              <li>Musings</li>
              <li>Work:</li>
                <ul>
                  <li>Software developer 💾</li>
                  <li>CDL driver 🚛</li>
                  <li>Copy editor ✒️</li>
                </ul>
                <li>Interests:</li>
                <ul>
                  <li>Skiing ⛷️</li>
                  <li>Local news 📰</li>
                  <li>Music / radio 📻</li>
                </ul>
              <li>
                <details closed="true">
                  <summary>Contact links:</summary>
                  <ul>
                    <li><a href="https://github.com/cusmoritz" target="_blank" rel="noreferrer">Github</a> 🤖</li>
                    <li><a href="mailto:cus.moritz@gmail.com">Email</a> ✉️</li>
                    <li><a href="https://www.linkedin.com/in/marcusmoritz/" target="_blank" rel="noreferrer">LinkedIn</a> 🔗</li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="status-bar">
          <span className="status-text">10 object(s)</span>
          <span className="status-size">9.70MB</span>
        </div>
        </>
    )
};