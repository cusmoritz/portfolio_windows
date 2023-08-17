import React from "react";
import { useParams } from "react-router-dom";

export const Blog = () => {

    return (
        <>
            <div className='title-bar' id='title-drag'>
              <div className='title-text'>www.marcus.me > blog</div>
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
                selected={true}
                aria-selected="true" 
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
            <h2>This is where I would put a personal blog? ✒️</h2>
            <ul className='home-tree'>
              <p className="blog-p">Writings and articles for various sites / papers / magazines in reverse chronological order. </p>
              <p className="blog-p">Note to readers: Not all of these are good, and many are pretty old! It was an important part of my life, so worth cataloging.</p>
              <li>
                <details closed="true">
                  <summary>Vail Daily (2017-2019)</summary>
                  <ul>
                    <li>Github 🤖</li>
                    <li>Email ✉️</li>
                    <li>LinkedIn 🔗</li>
                  </ul>
                </details>
                <details closed="true">
                  <summary>Playboy.com (2014-2015)</summary>
                  <ul>
                    <li>Github 🤖</li>
                    <li>Email ✉️</li>
                    <li>LinkedIn 🔗</li>
                  </ul>
                </details>
                <details closed="true">
                  <summary>303 Magazine (2014-2015)</summary>
                  <ul>
                    <li>Github 🤖</li>
                    <li>Email ✉️</li>
                    <li>LinkedIn 🔗</li>
                  </ul>
                </details>
                <details closed="true">
                  <summary>Medium.com (2015-2016)</summary>
                  <ul>
                    <li>Github 🤖</li>
                    <li>Email ✉️</li>
                    <li>LinkedIn 🔗</li>
                  </ul>
                </details>
                <details closed="true">
                  <summary>Rooster Magazine (2011-2013)</summary>
                  <ul>
                    <li>Github 🤖</li>
                    <li>Email ✉️</li>
                    <li>LinkedIn 🔗</li>
                  </ul>
                </details>
                <details closed="true">
                  <summary>The Rocky Mountain Collegian (2011-2014)</summary>
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