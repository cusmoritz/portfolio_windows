import React from "react";
import { useState } from "react";

export const Blog = () => {

  const [minimize, setMinimize] = useState(false);

  // TODO: 

  // Add Medium, rooster, Rocky Mountain

  // ##

  return (
    <>
      <div id={minimize === true ? "minimize" : "window-container"}>
        <div className={minimize === true ? "title-bar-min" : "title-bar"}>
          <div className='title-text'>www.marcus.me {">"} blog</div>
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
          <div className='main-content'>
            <h2>Historical writings / musings / personal blog (tk) ✒️</h2>
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
                    <li>Randomness Key To Adventure In Video Games (<a href="https://web.archive.org/web/20171012131306/https://www.playboy.com/articles/randomness-key-to-adventure-in-video-games" target="_blank" rel="noreferrer">archived link</a>)</li>
                  </ul>
                </details>
                <details closed="true">
                  <summary>303 Magazine (2014-2015)</summary>
                  <ul>
                    <li>What It's Like To Go From Homebrewer To GABF Contender — Meet Sara Goodwin (<a href="https://303magazine.com/2015/09/what-its-like-to-go-from-homebrewer-to-gabf-contender-meet-sara-goodwin/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20230203225737/https://303magazine.com/2015/09/what-its-like-to-go-from-homebrewer-to-gabf-contender-meet-sara-goodwin/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: Craft Beer, An Industry of Collaboration (<a href="https://303magazine.com/2015/03/hops-herald-craft-beer-an-industry-of-collaboration/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20230818004930/https://303magazine.com/2015/03/hops-herald-craft-beer-an-industry-of-collaboration/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: Cask Conditioned Beer At Hogshead Brewery (<a href="https://303magazine.com/2015/03/hops-herald-cask-conditioned-beer-at-hogshead-brewery/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20230818005520/https://303magazine.com/2015/03/hops-herald-cask-conditioned-beer-at-hogshead-brewery/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: 7 Reasons We Are Excited For Collaboration Fest (<a href="https://303magazine.com/2015/03/hops-herald-7-reasons-we-are-excited-for-collaboration-fest/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20230818005802/https://303magazine.com/2015/03/hops-herald-7-reasons-we-are-excited-for-collaboration-fest/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: Nine Worldly Facts About Beer (<a href="https://303magazine.com/2015/02/hops-herald-nine-worldly-facts-about-beer/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20230603185433/https://303magazine.com/2015/02/hops-herald-nine-worldly-facts-about-beer/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: Declaration Has Brewing Down To A Science (<a href="https://303magazine.com/2015/02/hops-herald-declaration-has-brewing-down-to-a-science/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20230818010050/https://303magazine.com/2015/02/hops-herald-declaration-has-brewing-down-to-a-science/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: Meet Odyssey Beerwerks (<a href="https://303magazine.com/2015/02/hops-herald-meet-odyssey-beerwerks/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20230818010147/https://303magazine.com/2015/02/hops-herald-meet-odyssey-beerwerks/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: How Colorado Breweries Name Beer (<a href="https://303magazine.com/2015/01/hops-herald-colorado-breweries-name-beer/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20230201055208/https://303magazine.com/2015/01/hops-herald-colorado-breweries-name-beer/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: The Bomber Cave At Molly's Spirits (<a href="https://303magazine.com/2015/01/hops-herald-bomber-cave-mollys-spirits/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20230127045327/https://303magazine.com/2015/01/hops-herald-bomber-cave-mollys-spirits/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: 5 Denver Black IPAs (<a href="https://303magazine.com/2015/01/hops-herald-5-denver-black-ipas/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20210518214822/https://303magazine.com/2015/01/hops-herald-5-denver-black-ipas/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: 5 Sour Beers to Try In Denver Now (<a href="https://303magazine.com/2014/12/hops-herald-5-sour-beers-try-denver-now/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20211129094602/https://303magazine.com/2014/12/hops-herald-5-sour-beers-try-denver-now/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: 8 Great Dark Colorado Beers (<a href="https://303magazine.com/2014/12/hops-herald-eight-great-colorado-dark-beers/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20230127115544/https://303magazine.com/2014/12/hops-herald-eight-great-colorado-dark-beers/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Hops Herald: Parade Of Darks Preview (<a href="https://303magazine.com/2014/12/hops-herald-parade-darks-preview/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20181220142714/https://303magazine.com/2014/12/hops-herald-parade-darks-preview/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Beer Banter: Thanksgiving Day Pairings (<a href="https://303magazine.com/2014/11/beer-banter-thanksgiving-beer-pairings/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20190212180036/https://303magazine.com/2014/11/beer-banter-thanksgiving-beer-pairings/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Beer Banter: 2014 Beer And Bacon Festival Roundup (<a href="https://303magazine.com/2014/11/beer-banter-2014-bacon-beer-festival-roundup/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20190226220424/https://303magazine.com/2014/11/beer-banter-2014-bacon-beer-festival-roundup/" target="_blank" rel="noreferrer">archived link</a>)</li>

                    <li>Beer Banter: The Third Annual Denver Bacon and Beer Festival (<a href="https://303magazine.com/2014/11/third-annual-denver-bacon-and-beer-festival/" target="_blank" rel="noreferrer">link</a>) (<a href="https://web.archive.org/web/20181220142739/https://303magazine.com/2014/11/third-annual-denver-bacon-and-beer-festival/" target="_blank" rel="noreferrer">archived link</a>)</li>

                  </ul>
                </details>
                <details closed="true">
                  <summary>Medium.com (2015-2016)</summary>
                  <ul>
                    <li>TK</li>
                    <li>TK</li>
                    <li>TK</li>
                  </ul>
                </details>
                <details closed="true">
                  <summary>Rooster Magazine (2011-2013)</summary>
                  <ul>
                    <li>TK</li>
                  </ul>
                </details>
                <details closed="true">
                  <summary>The Rocky Mountain Collegian (2011-2014)</summary>
                  <ul>
                    <li>TK</li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className="status-bar">
          <span className="status-text">37 object(s)</span>
          <span className="status-size">15.80MB</span>
        </div>

        </>
      )}

    </div>
    </>
  )
}

