import React from "react";

export const Projects = () => {
    return (
        <>
            <div className='title-bar' id='title-drag'>
              <div className='title-text'>www.marcus.me {'>'} projects</div>
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
            <h2>Personal and professional (tk) software development projects / applications 💾</h2>
            <ul className='home-tree'>
              <p><i>Projects are listed in reverse chronological order, hopefully the best stuff is near the top.</i></p>
              <li>
              <details closed="true">
                  <summary>This website!</summary>
                  <ul>
                    <li><u>Title:</u> marcus.me</li>
                    <li><u>Link:</u> <a href="/">www.marcus.me</a></li>
                    <li><u>Purpose:</u> Personal portfolio website.</li>
                    <li><u>Inspiration:</u> <a href="http://www.gurgen.info">gurgen.info</a>, and <a href="https://jdan.github.io/98.css/">98.css</a>. It's also a throwback to my memories as a kid watching my mom do bookeeping on our old Windows machine. Everything old is new again.</li>
                    <li><u>Built with:</u> React, Javascript, and a whole lot of hand-coded CSS to get this bad boy all squared up. I didn't actually use 98.css, but I think I achieved something similar.</li>
                    <li><u>Learned:</u> A lot about CSS! Including <i>box-shadow</i>, <i>details</i> and <i>summary</i>, fonts, and those damn tabs at the top of the page. Finicky.</li>
                    <li><u>Concurrent users:</u> 1 (one)</li>
                  </ul>
              </details>
              </li>

              <li>
              <details closed="true">
                  <summary>RSS Feed</summary>
                  <ul>
                    <li><u>Title:</u> Streamer (needs a better name I know)</li>
                    <li><u>Link:</u> <a href="http://rss-feed-pwdx.onrender.com/">rss-feed-pwdx.onrender.com</a></li>
                    <li><u>GitHub Link:</u> <a href="https://github.com/cusmoritz/RSS-attempte-1">github.com/cusmoritz/RSS-attempte-1</a></li>
                    <li><u>Purpose:</u> Personalized news aggregation.</li>
                    <li><u>Inspiration:</u> Not content with the other <i>social media</i>-esque ways to gather news, I decided to build my own. RSS is a valuable technology, and still completely works! Everything old is new again etc etc.</li>
                    <li><u>Built with:</u> Javascript, React, Express.JS, PostgreSQL, CSS, XML.</li>
                    <li><u>Learned:</u> Not even sure where to start. As the first major personal project after finishing my certificate program, I learned a little about XML; a lot about APIs and URLs; a ton about React state; a little about recommitting to Git after I broke it several times; at least enough to deploy it; and got better at local storage with registering and signing in a user.</li>
                    <li><u>Concurrent users:</u> 1 (one). Could be more; don't forget to smash that subscribe button!</li>
                  </ul>
                </details>
              </li>
              <li>
              <details closed="true">
                  <summary>Pokemon Shopper</summary>
                  <ul>
                    <li><u>Title:</u> Pokemon Shopper</li>
                    <li><u>Link:</u> <a href="https://card-shopper.onrender.com/">card-shopper.onrender.com</a></li>
                    <li><u>GitHub Link:</u> <a href="https://github.com/CharizardsBlaze/Pokemon-Shopper">github.com/CharizardsBlaze/Pokemon-Shopper</a></li>
                    <li><u>Purpose:</u> E-commerce shopping website.</li>
                    <li><u>Inspiration:</u> Pokemon, and their collectability. Also we needed a capstone project for our certificate program.</li>
                    <li><u>Built with:</u> Javascript, React, Express.JS, PostgreSQL, CSS, Jest, Bcrypt, Stripe, JSON web tokens.</li>
                    <li><u>Learned:</u> Not even sure where to start. As the first major personal project after finishing my certificate program, I learned a little about XML; a lot about APIs and URLs; a ton about React state; a little about recommitting to Git after I broke it several times; at least enough to deploy it; and got better at local storage with registering and signing in a user.</li>
                    <li><u>Concurrent users:</u> 1 (one). Could be more; don't forget to smash that subscribe button!</li>
                  </ul>
                </details>
              </li>
                {/* <ul>
                  <li>Title: marcus.me</li>
                  <li>Link: <a href="/">www.marcus.me</a></li>
                  <li>News 🗞️</li>
                  <li>Skiing ⛷️</li>
                </ul> */}
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