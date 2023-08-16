import React from "react";

export const Blog = () => {
    return (
        <>
            <menu role="tablist">
            <li 
                role="tab" 
                selected="true" 
                aria-selected="false" 
                label="Home">
                    <a href="/">Home</a>
            </li>
            <li 
                role="tab" 
                selected="false" 
                aria-selected="true" 
                label="Blog">
                    <a href="/blog">Musings</a>
            </li>
            <li 
                role="tab" 
                selected="false" 
                aria-selected="false" 
                label="Projects">
                    <a href="/projects">Projects</a>
            </li>
        </menu>

        <div className='main-content-container' role="tabpanel">
          <div className='main-content' >
            <h2>This is where I would put a personal blog? ✒️</h2>
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
                <details closed>
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

        </>
    )
}