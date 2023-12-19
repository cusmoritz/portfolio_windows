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
                Dec. 18 2023: <a href="https://aftermath.site/embracer-layoffs-executive-saudi" target="_blank" rel="noreferrer">Executives Should Be Facing The Music, Not Laying Off Workers</a> (Aftermath) ... The headline says it all, but this article articulates a hedge fund gobbling up video game devellopment companies and then firing all (most of) the employees.
              </li>
              <li>
                Dec. 10 2023: <a href="https://badcyber.com/dieselgate-but-for-trains-some-heavyweight-hardware-hacking/" target="_blank" rel="noreferrer">Dieselgate, but for trains – some heavyweight hardware hacking</a> (BadCyber) ... Read this wild (translated) story about a company electronically bricking <i>TRAINS</i> in Poland.
              </li>
              <li>
                Nov. 30 2023: <a href="https://www.sfgate.com/sf-culture/article/elon-musk-nyt-interview-18524602.php" target="_blank" rel="noreferrer">The end of Elon Musk</a> (SFGate) ... “Don't advertise,” he said to the audience. “If someone is going to try to blackmail me with advertising? Blackmail me with money? Go f—k yourself."
              </li>
              <li>
                Nov. 27 2023: <a href="https://www.theverge.com/2023/11/27/23978042/popular-science-digital-magazine-discontinued" target="_blank" rel="noreferrer">After 151 years, Popular Science will no longer offer a magazine</a> (The Verge) ... This is so sad, man. This magazine (I'm sure) inspired millions and now only lives on the internet. #RIP.
              </li>
              <li>
                Oct. 15 2023: <a href="https://www.propublica.org/article/local-newspaper-legacy-springfield-massachusetts" target="_blank" rel="noreferrer">ELocal Newspapers Are Vanishing. How Should We Remember Them?</a> (ProPublica) ... They really are. It will be a sad day when local newspapers dissapear.
              </li>
              <li>
                Sept. 25 2023: <a href="https://theathletic.com/4888144/2023/09/22/college-football-road-trip/" target="_blank" rel="noreferrer">Ultimate College Football Roadtrip</a> (The Athletic) ... A fun story about a sportswriter taking a huge roadtrip for some football.
              </li>
              <li>
                Sept. 24 2023: <a href="https://www.theatlantic.com/technology/archive/2023/09/google-search-size-usefulness-decline/675409/" target="_blank" rel="noreferrer">The Tragedy of Google Search</a> (The Atlantic) ... Yet another story about how Google is becoming less and less useful.
              </li>
              <li>
                Sept. 21 2023: <a href="https://www.sfgate.com/sports/article/root-for-coach-prime-sanders-colorado-18380922.php" target="_blank" rel="noreferrer">Screw It, I'll Root For Colorado</a> (SF Gate) ... Drew Magary writes about how fun it is to watch the Colorado Buffs and Deion Sanders.
              </li>
              <li>
                Sept. 21 2023: <a href="https://www.vice.com/en/article/pkaq9z/us-cities-have-a-staggering-problem-of-kia-and-hyundai-thefts-this-data-shows-it" target="_blank" rel="noreferrer">KIA Thefts</a> (Vice) ... People are stealing Kias and Hyundia so often cities are suing the companies.
              </li>
              <li>
                Sept. 20 2023: <a href="https://www.rollingstone.com/culture/culture-news/nfts-worthless-researchers-find-1234828767/" target="_blank" rel="noreferrer">Worthless NFTs </a> (Rolling Stone) ... The NFT boom is all bust. 
              </li>
              <li>
                Sept. 19 2023: <a href="https://kylechayka.substack.com/p/essay-the-digital-death-of-collecting" target="_blank" rel="noreferrer">The Digital Death of Collecting</a> (Substack) ... An essay reminiscing about how we are no longer in charge of our own music, among other thigns. 
              </li>
              <li>
                Sept. 18 2023: <a href="https://www.vox.com/politics/23827432/pop-crave-pop-base-politics-election-2024-trump-biden-indictment" target="_blank" rel="noreferrer">Internet Wire Service</a> (Vox) ... This story looks into how we consume news in 2023, in particular with Twitter accounts Pop Crave and Pop Base.
              </li>
              <li>
                Sept. 18 2023: <a href="https://www.theatlantic.com/magazine/archive/2023/09/disabled-children-institutionalization-history/674763/" target="_blank" rel="noreferrer">The Ones We Sent Away</a> (The Atlantic) ... A gut-wrenching story about being disabled and the institutions we build. (<a href="https://12ft.io/proxy?q=https%3A%2F%2Fwww.theatlantic.com%2Fmagazine%2Farchive%2F2023%2F09%2Fdisabled-children-institutionalization-history%2F674763%2F" target="_blank" rel="noreferrer">Unlocked</a>)
              </li>
              <li>
                Sept. 14 2023: <a href="https://pudding.cool/projects/clocks/news/" target="_blank" rel="noreferrer">Pudding.Cool news clock</a> ... A clock made up of news headlines. Very cool.
              </li>
              <li>
                Sept. 13 2023: <a href="https://presswatchers.org/2023/09/cnn-should-become-the-anti-fox-pro-truth-network/" target="_blank" rel="noreferrer">CNN should be the anti-Fox</a> ... Presswatch.org's thoughts on CNN and its future. "CNN, it would say, is for the people."
              </li>
              <li>
                Sept. 12 2023: <a href="https://www.latimes.com/entertainment-arts/books/story/2023-09-11/lets-put-a-stake-in-the-great-man-biography-starting-with-isaacsons-elon-musk" target="_blank" rel="noreferrer">Let's put a stake in the 'great man' biography</a> (LA Times) ... LA Times review of Walter Isaacson's "Elon Musk" biography and the problems it has.
              </li>
              <li>
                Sept. 11 2023: <a href="https://chuckpalahniuk.substack.com/p/gloves-off-round-xxxvi" target="_blank" rel="noreferrer">Gloves Off Round XXXVI</a> (Substack) ... Chuck P. gives feedback on a user-submitted short story.
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
                Sept. 4 2023: <a href="https://folkways.si.edu/fight-like-hell-music-for-labor-day" target="_blank" rel="noreferrer">Fight Like Hell: Music for Labor Day</a> ... a playlist featuring songs and artists that are very pro-worker. Notable artists include Pete Seeger, Sturgill Simpson, and Woody Guthrie.
              </li>
              <li>
                Sept. 1 2023: <a href="https://www.theverge.com/23846048/google-search-memes-images-pagerank-altavista-seo-keywords" target="_blank" rel="noreferrer">The end of the Googleverse</a> (The Verge) ... an interesting article about Google setting about solidifying its own demize.
              </li>
              <li>
                Aug. 25 2023: <a href="https://www.tracklib.com/blog/sample-breakdown-50-years-hip-hop-sampling" target="_blank" rel="noreferrer">50 Years of Hip Hop Sampling</a> (Tracklib) ... Sweet visualization of some of the most famous samples in hip hop history.
              </li>
            </ul>
          </div>
        </div>

        <div className="status-bar">
          <span className="status-text">37 object(s)</span>
          <span className="status-size">19.66MB</span>
        </div>

        </>
      )}

    </div>
    </>
    )
}