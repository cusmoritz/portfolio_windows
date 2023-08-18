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
                    <li>7 Hermits embracing new kitchen in Eagle (<a href="https://www.vaildaily.com/news/7-hermits-embracing-new-kitchen-in-eagle-everything-is-made-out-of-beer/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20201027035823/https://www.vaildaily.com/news/7-hermits-embracing-new-kitchen-in-eagle-everything-is-made-out-of-beer/" target="_blank" rel="noreferrer">archived link</a>)</li>
                    <li>What to expect from a flight at Bonfire Brewing (<a href="https://www.vaildaily.com/news/beer-thirty-what-to-expect-from-a-flight-at-bonfire-brewing/" rel="noreferer">link</a>) (<a href="https://web.archive.org/web/20210119053732/https://www.vaildaily.com/news/beer-thirty-what-to-expect-from-a-flight-at-bonfire-brewing/" target="_blank" rel="noreferrer">archived link</a>)</li>
                    <li>Rich history and selection at Periodic Brewing in Leaville (<a href="https://www.vaildaily.com/entertainment/rich-history-and-selection-at-periodic-brewing-in-leaville/" rel="noreferer">link</a>) (<a href="https://web.archive.org/web/20210803001311/https://www.vaildaily.com/entertainment/rich-history-and-selection-at-periodic-brewing-in-leaville/" target="_blank" rel="noreferrer">archived link</a>)</li>
                    <li>Vail Brewing Co. wins medals for its beer (<a href="https://www.vaildaily.com/news/award-winners-vail-brewing-co-wins-medals-for-its-beer/" rel="noreferer">link</a>) (<a href="https://web.archive.org/web/20210124092838/https://www.vaildaily.com/news/award-winners-vail-brewing-co-wins-medals-for-its-beer/" target="_blank" rel="noreferrer">archived link</a>)</li>
                  </ul>
                </details>
                <details closed="true">
                  <summary>Playboy.com (2014-2015)</summary>
                  <ul>
                    <li><i>Reader's note: Playboy.com no longer has a gaming section due to a change in management.</i></li>
                    <li>Why Two Dudes Forced Themselves to Play Every ‘Sonic’ Game Ever (<a href="https://web.archive.org/web/20160804041751/http://www.playboy.com/articles/why-two-dudes-forced-themselves-to-play-every-sonic-game-ever" target="_blank" rel="noreferrer">archived link</a>)</li>
                    <li>Becoming a Tetris Grand Master Takes An Insane Amount of Skill (<a href="https://web.archive.org/web/20160116093550/http://www.playboy.com/articles/becoming-a-tetris-grand-master-insane-skill" target="_blank" rel="noreferrer">archived link</a>)</li>
                    <li>Randomness Key To Adventure In Video Games (archived link missing)</li>
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