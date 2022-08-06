import React from 'react' 
import myImage from '../assets/images/WhatsApp Image 2022-03-18 at 3.34.03 PM.jpeg';
import linkedIn from "../assets/images/icons8-linkedin-50.png"
import resume from "../assets/images/icons8-download-resume-50.png"
import phone from "../assets/images/icons8-phone-50.png"
import email from "../assets/images/icons8-email-open-50.png"
function Home() {
    return (
      <main>
      <figure>
        <img
          src={myImage}
          alt="sajjad zaidi"
          class="avator"
        />
        <figcaption>
          <h1 class="styled-text"><span>S</span>ajjad <span>Z</span>aidi</h1>
        </figcaption>
        <section>
          <a href="https://www.linkedin.com/in/sajjad-zaidi-829a451aa/"
            ><img class="icon"
              src={linkedIn}
              alt="Linkedn icon" />
            </a>
          <a href="./assets/images/Sajjad_Zaidi_Resume_06-07-2022-11-50-49.pdf"
            ><img class="icon"
              src={resume}
              alt="Resume icon" />
            </a>
          <a href="tel:267-890-4118"
            title="267-890-4118"
            ><img class="icon"
              src={phone}
              alt="Phone icon" />
            </a>
          <a href="mailto:sajjadzaidi2015@gmail.com"
            title="sajjadzaidi2015@gmail.com"
            ><img class="icon"
              src={email}
              alt="Email icon" />
            </a>
        </section>
      </figure>
    </main>
      );
}
export default Home;