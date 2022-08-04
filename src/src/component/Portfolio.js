import React from 'react' 

function Portfolio() {
    const respositories = [
      {
        image: './assets/images/Web capture_6-7-2022_12047_codeop2.herokuapp.com.jpeg',
        title: 'codeOP',
        description: 'This full-stack application is built from scratch using the Model View Controller (MVC) paradigm to connect a server-side API, user authentication, and a database. The application is called **codeOp**, which is a play on code and co-op. A number of nonprofits lack a development team and there are plenty of budding developers in need of real-world experience and seasoned ones who are happy to share their expertise. This site is designed to provide a space where they can share resources, gain real-world experience, and complete projects.',
        liveLink: 'https://codeop2.herokuapp.com/',
        githubLink: 'https://github.com/cpaschall/codeOp'
      },
      {
        image: './assets/images/app_movie1.png',
        title: 'Movies Watchlist',
        description: 'Movies search engine contain information are provided by the Open Movie Database(OMDB) and trailers are provided by the Internet Movie Database(IMDb).',
        liveLink: 'https://binnie51.github.io/movie-watchlist/',
        githubLink: 'https://github.com/binnie51/movie-watchlist'
      },
      {
        image: './assets/images/code-refactoring.png',
        title: 'Horiseon Marketing',
        description: 'Marketing site for Horiseon, site is SEO optimized and adhere to accesssbility standards.',
        liveLink: 'https://sajjazaidi2015.github.io/code-refactoring/',
        githubLink: 'https://github.com/sajjazaidi2015/code-refactoring'
      },
      {
        image: './assets/images/Quiz Page.jpeg',
        title: 'Code Quiz',
        description: 'This timed code quiz features multiple-choice questions about javascript. If answered incorrectly, time is deducted.',
        liveLink: 'https://sajjazaidi2015.github.io/Code-Quiz/',
        githubLink: 'https://github.com/sajjazaidi2015/Code-Quiz'
      },
      {
        image: './assets/images/Weather-Dashboard.jpeg',
        title: 'Weather Dashboard',
        description: 'A web-based dashboard built to show the current weather in a city of choice and the upcoming five (5) day forecast for that city Enter in your city of choice and select search to view the current weather, temperature, humidity, wind speed, and UV Index for that city at the current time. Upon the search, the dashobard will also display the weather, temperature and hummidity forecast for the next five(5) days.',
        liveLink: 'https://sajjazaidi2015.github.io/Weather-Dashboard/',
        githubLink: 'https://github.com/sajjazaidi2015/Weather-Dashboard'
      },

    ]

    return (
      <main class="portfolio">
      <div>
          <h1 class="styled-text"><span>P</span>ortfolio</h1>
      </div>
      <section>
          <article class="code-repositories">
              <div>
                  <img src="./assets/images/Web capture_6-7-2022_12047_codeop2.herokuapp.com.jpeg" alt="codeOP"/>
                  <h2>codeOP</h2>
                  <p> This full-stack application is built from scratch using the Model View Controller (MVC) paradigm to connect a server-side API, user authentication, and a database. The application is called **codeOp**, which is a play on code and co-op. A number of nonprofits lack a development team and there are plenty of budding developers in need of real-world experience and seasoned ones who are happy to share their expertise. This site is designed to provide a space where they can share resources, gain real-world experience, and complete projects.
                      .</p>
                  <div class="links">
                      <a href="https://codeop2.herokuapp.com/" target="_blank">Live<div></div></a>
                      <a href="https://github.com/cpaschall/codeOp" target="_blank"><img class="icon" src="./assets/images/github.svg" alt="Github icon" /></a>
                  </div>
              </div>
          </article>
          <article class="code-repositories">
              <div>
                  <img src="./assets/images/app_movie1.png" alt="code-refactoring"/>
                  <h2>Movies Watchlist</h2>
                  <p> Movies search engine contain information are provided by the Open Movie Database(OMDB) and trailers are provided by the Internet Movie Database(IMDb).</p>
                  <div class="links">
                      <a href="https://binnie51.github.io/movie-watchlist/" target="_blank">Live<div></div></a>
                      <a href="https://github.com/binnie51/movie-watchlist" target="_blank"><img class="icon" src="./assets/images/github.svg" alt="Github icon" /></a>
                  </div>
              </div>
          </article>
          <article class="code-repositories">
              <img src="./assets/images/code-refactoring.png" alt="code-refactoring"/>
              <h2>Horiseon Marketing</h2>
              <p>Marketing site for Horiseon, site is SEO optimized and adhere to accesssbility standards.</p>
              <div class="links">
                  <a href="https://sajjazaidi2015.github.io/code-refactoring/" target="_blank">Live<div></div></a>
                  <a href="https://github.com/sajjazaidi2015/code-refactoring" target="_blank"><img class="icon" src="./assets/images/github.svg" alt="Github icon" /></a>
              </div>
          </article>
          <article class="code-repositories">
              <img src="./assets/images/Quiz Page.jpeg" alt="code-quiz"/>
              <h2>Code Quiz</h2>
              <p>This timed code quiz features multiple-choice questions about javascript. If answered incorrectly, time is deducted.</p>
              <div class="links">
                  <a href="https://sajjazaidi2015.github.io/Code-Quiz/" target="_blank">Live<div></div></a>
                  <a href="https://github.com/sajjazaidi2015/Code-Quiz" target="_blank"><img class="icon" src="./assets/images/github.svg" alt="Github icon" /></a>
              </div>
          </article>
          <article class="code-repositories">
              <img src="./assets/images/Weather-Dashboard.jpeg" alt="Weather-Dashboard"/>
              <h2>Horiseon Marketing</h2>
              <p>A web-based dashboard built to show the current weather in a city of choice and the upcoming five (5) day forecast for that city
                  Enter in your city of choice and select search to view the current weather, temperature, humidity, wind speed, and UV Index for that city at the current time. Upon the search, the dashobard will also display the weather, temperature and hummidity forecast for the next five(5) days.</p>
              <div class="links">
                  <a href="https://sajjazaidi2015.github.io/Weather-Dashboard/" target="_blank">Live<div></div></a>
                  <a href="https://github.com/sajjazaidi2015/Weather-Dashboard" target="_blank"><img class="icon" src="./assets/images/github.svg" alt="Github icon" /></a>
              </div>
          </article>
      </section>
  </main>
      );
}

export default Portfolio;