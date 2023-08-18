import React from "react";

export const Projects = () => {
    return (
        <>
            <div className='title-bar' id='title-drag'>
              <div className='title-text'>www.marcus.me > projects</div>
              <button className='help-button'><strong>?</strong></button>
            </div>
            <menu role="tablist">
            <li 
                role="tab" 
                selected={false}
                aria-selected="false" 
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
                selected={true}
                aria-selected="true" 
                label="Projects">
                    <a href="/projects">Projects</a>
            </li>
        </menu>

        <div className='main-content-container' role="tabpanel">
          <div className='main-content' >
            <h2>This is where I would put a list of personal / professional projects or writings! 💾</h2>
            <ul className='home-tree'>
              <li>Musings</li>
              <li>Work and Interests</li>
                <ul>
                  <li>Copy editor ✒️</li>
                  <li>Software developer 💾</li>
                  <li>News 🗞️</li>
                  <li>Skiing ⛷️</li>
                </ul>
              <li>
                <details closed="true">
                  <summary>Links:</summary>
                  <ul>
                    <li>Github 🤖</li>
                    <li>Email ✉️</li>
                    <li>LinkedIn 🔗</li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className="status-bar">
          <span className="status-text">5 object(s)</span>
          <span className="status-size">6.30MB</span>
        </div>

        </>
    )
}