import React from "react";
import { useState } from "react";
import { Item } from "./Item";

// const minimize = () => {
//   const display = document.getElementsByClassName("window-container");
//   console.log(display)
//   display.classList.toggle("minimize")
// }

export const Home = () => {

  const [minimize, setMinimize] = useState(false);


  return (
    <>
      <div id={minimize === true ? "minimize" : "window-container"}>
        <div className={minimize === true ? "title-bar-min" : "title-bar"}>
          <div className='title-text'>www.marcus.me</div>
            <div>
              <button onClick={() => setMinimize(!minimize)}>_</button>
              <button className='help-button'><strong>?</strong></button>
            </div>
          </div>
      {minimize === true ? null : 
        (
          <>
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
          <div className='main-content'>
            <h2>Welcome to my home on the World Wide Web! 🌐</h2>
              <ul className="home-tree">
                <li><a href="/blog">Musings</a></li>
                <li>Work:</li>
                  <ul>
                    <li><a href="/projects">Software developer</a> 💾</li>
                    <li>CDL driver 🚛</li>
                    <li>Copy editor ✒️</li>
                    <li><a href="/blog">Writer</a> 📄</li>
                  </ul>
                  <li>Interests:</li>
                  <ul>
                    <Item title={"Skiing ⛷️"} stats={"Determination + 3"}/>
                    <Item title={"Local news 📰"}/>
                    <Item title={"Music / radio 📻"}/>
                  </ul>
                <li>
                  <details closed="true">
                    <summary>Contact links:</summary>
                    <ul>
                      <li><a href="https://github.com/cusmoritz" target="_blank" rel="noreferrer">Github</a> 🤖</li>
                      <li><a href="mailto:cus.moritz@gmail.com">Email</a> ✉️</li>
                      <li><a href="https://www.linkedin.com/in/marcusmoritz/" target="_blank" rel="noreferrer">LinkedIn</a> 🔗</li>
                      <li><a href="/resume" target="_blank" rel="noreferrer">Resume</a> 🔖</li>
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
      )}

    </div>
  </>
  )
};