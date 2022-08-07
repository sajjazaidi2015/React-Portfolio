import React from 'react'
import codeOP from '../assets/images/Web capture_6-7-2022_12047_codeop2.herokuapp.com.jpeg'
import moviesWatchList from '../assets/images/app_movie1.png' 
import horrisonMarketing from '../assets/images/code-refactoring.png'
import codeQuiz from '../assets/images/Quiz Page.jpeg'
import weatherDashboard from '../assets/images/Weather-Dashboard.jpeg'
import gitHubImage from '../assets/images/github.svg'

function Portfolio() {
    const respositories = [
      {
        image: codeOP,
        title: 'codeOP',
        description: 'This full-stack application is built from scratch using the Model View Controller (MVC) paradigm to connect a server-side API, user authentication, and a database. The application is called **codeOp**, which is a play on code and co-op. A number of nonprofits lack a development team and there are plenty of budding developers in need of real-world experience and seasoned ones who are happy to share their expertise. This site is designed to provide a space where they can share resources, gain real-world experience, and complete projects.',
        liveLink: 'https://codeop2.herokuapp.com/',
        githubLink: 'https://github.com/cpaschall/codeOp',
        gitHubIcon: gitHubImage
      },
      {
        image: moviesWatchList,
        title: 'Movies Watchlist',
        description: 'Movies search engine contain information are provided by the Open Movie Database(OMDB) and trailers are provided by the Internet Movie Database(IMDb).',
        liveLink: 'https://binnie51.github.io/movie-watchlist/',
        githubLink: 'https://github.com/binnie51/movie-watchlist',
        gitHubIcon: gitHubImage
      },
      {
        image: horrisonMarketing,
        title: 'Horiseon Marketing',
        description: 'Marketing site for Horiseon, site is SEO optimized and adhere to accesssbility standards.',
        liveLink: 'https://sajjazaidi2015.github.io/code-refactoring/',
        githubLink: 'https://github.com/sajjazaidi2015/code-refactoring',
        gitHubIcon: gitHubImage
      },
      {
        image: codeQuiz,
        title: 'Code Quiz',
        description: 'This timed code quiz features multiple-choice questions about javascript. If answered incorrectly, time is deducted.',
        liveLink: 'https://sajjazaidi2015.github.io/Code-Quiz/',
        githubLink: 'https://github.com/sajjazaidi2015/Code-Quiz',
        gitHubIcon: gitHubImage
      },
      {
        image: weatherDashboard,
        title: 'Weather Dashboard',
        description: 'A web-based dashboard built to show the current weather in a city of choice and the upcoming five (5) day forecast for that city Enter in your city of choice and select search to view the current weather, temperature, humidity, wind speed, and UV Index for that city at the current time. Upon the search, the dashobard will also display the weather, temperature and hummidity forecast for the next five(5) days.',
        liveLink: 'https://sajjazaidi2015.github.io/Weather-Dashboard/',
        githubLink: 'https://github.com/sajjazaidi2015/Weather-Dashboard',
        gitHubIcon: gitHubImage
      },

    ]

    return (
      <main className="portfolio">
      <div>
          <h1 className="styled-text"><span>P</span>ortfolio</h1>
      </div>
      {respositories.map(item => {
        return (
            <section>      
               <article className="code-repositories">
              <div>
                  <img src={item.image} alt="codeOP"/>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="links">
                      <a href={item.liveLink} target="_blank" rel="noreferrer">Live<div></div></a>
                      <a href={item.githubLink} target="_blank" rel="noreferrer"><img className="icon" src={item.gitHubIcon} alt="Github icon" /></a>
                  </div>
              </div>
          </article>
            </section>
            )
          })
        }
      
  </main>
      );
}

export default Portfolio;