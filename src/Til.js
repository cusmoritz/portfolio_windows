import React from "react";
import { useState } from "react";

export const Til = () => {

    const [minimize, setMinimize] = useState(false);

    return (
    <>
      <div id={minimize === true ? "minimize" : "window-container"}>
        <div className={minimize === true ? "title-bar-min" : "title-bar"}>
          <div className='title-text'>www.marcus.me {">"} TIL</div>
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
            selected={false} 
            aria-selected="false" 
            label="Blog">
                <a href="/writings">Writings</a>
          </li>
          <li 
            role="tab" 
            selected={false}
            aria-selected="false" 
            label="Projects">
                <a href="/projects">Projects</a>
          </li>
          <li 
            role="tab" 
            selected={true}
            aria-selected="true" 
            label="Projects">
                <a href="/til">TIL</a>
          </li>
          </menu>

        <div className='main-content-container' role="tabpanel">
          <div className='main-content'>
            <h2>TIL / TIR (Today I Read)</h2>
            <ul className='home-tree'>
              <p className="blog-p">Things I've learned / things I have read and want to remember. </p>
              <li>
                Sept. 14 2023: <a href="https://pudding.cool/projects/clocks/news/" target="_blank" rel="noreferrer">Pudding.Cool news clock</a> ... A clock made up of news headlines. Very cool.
              </li>
              <li>
                Sept. 13 2023: <a href="https://presswatchers.org/2023/09/cnn-should-become-the-anti-fox-pro-truth-network/" target="_blank" rel="noreferrer">CNN should be the anti-Fox</a> ... Presswatch.org's thoughts on CNN and its future. "CNN, it would say, is for the people."
              </li>
              <li>
                Sept. 12 2023: <a href="https://www.latimes.com/entertainment-arts/books/story/2023-09-11/lets-put-a-stake-in-the-great-man-biography-starting-with-isaacsons-elon-musk" target="_blank" rel="noreferrer">Let's put a stake in the 'great man' biography</a> ... LA Times review of Walter Isaacson's "Elon Musk" biography and the problems it has.
              </li>
              <li>
                Sept. 11 2023: <a href="https://chuckpalahniuk.substack.com/p/gloves-off-round-xxxvi" target="_blank" rel="noreferrer">Gloves Off Round XXXVI</a> ... Chuck P. gives feedback on a user-submitted short story.
              </li>
              <li>
                Sept. 11 2023: <a href="https://chuckpalahniuk.substack.com/p/another-boringly-obvious-observation" target="_blank" rel="noreferrer">Chuck Palahniuk's Substack</a> ... I didn't know Chuck P. had a substack, but he's a great writer. This specific story is about the Ross Steering Gear recall. "Write with your whole person, but mostly with your legs."
              </li>
              <li>
                Sept. 10 2023: <a href="https://banhmiverlag.bandcamp.com/album/all-star-mixtape" target="_blank" rel="noreferrer">All Star Mixtape</a> ... Stumbled upon this after the death of Steve Harwell, lead singer of Smashmouth. Includes hilarous remixes of their notable song "All Star".
              </li>
              <li>
                Sept. 10 2023: <a href="https://www.construction-physics.com/p/how-the-car-came-to-la" target="_blank" rel="noreferrer">How The Car Came to LA</a> ... A great article explaining the history and impact the automobile had on the growth and expansion of LA.
              </li>
              <li>
                Sept. 9 2023: <a href="https://en.wikipedia.org/wiki/The_Monkey_Wrench_Gang" target="_blank" rel="noreferrer">Monkey Wrench Gang</a> ... Reading through the Wikipedia article about The Monkey Wrench Gang, a book about preserving the wilderness.
              </li>
              <li>
                Sept. 8 2023: <a href="https://github.com/A-poc/RedTeam-Tools" target="_blank" rel="noreferrer">Red Team Tools</a> ... Not a story, but a collection of "Red Team" tools for ... "Red Team activities."
              </li>
              <li>
                Sept. 7 2023: <a href="https://cpu.land/" target="_blank" rel="noreferrer">CPU Land</a> ... "What exactly happens when you run a program on your computer?" explainer.
              </li>
              <li>
                Sept. 6 2023: <a href="https://tylervigen.com/the-mystery-of-the-bloomfield-bridge" target="_blank" rel="noreferrer">The Mystery of the Bloomfield Bridge</a> ... A funny story about one man's uninhibited search for meaning in architecture and city development with a mysterious bridge outside of Minneapolis.
              </li>
              <li>
                Sept. 4 2023: <a href="https://folkways.si.edu/fight-like-hell-music-for-labor-day" target="_blank" rel="noreferrer">Fight Like Hell: Music for Labor Day</a> ... a playlist featuring songs and artists that are very pro-worker.<br></br>
                Notable artists include Pete Seeger, Sturgill Simpson, and Woody Guthrie.
              </li>
              <li>
                Sept. 1 2023: <a href="https://www.theverge.com/23846048/google-search-memes-images-pagerank-altavista-seo-keywords" target="_blank" rel="noreferrer">The end of the Googleverse</a> ... an interesting article about Google setting about solidifying its own demize.
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