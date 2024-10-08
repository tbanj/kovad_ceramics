import React, { Fragment, Suspense, lazy } from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import './bodyabout.css';
import smilingLady from '../../assets/excellent-group.png';
import yetunde from '../../assets/yetunde.png';
// import imagePlaceholder from '../../assets/imagePlaceholder.png';
import FullPageSpinner from '../loader/FullPageSpinner';
import imagePlaceholder from '../../assets/img_avatar.png';
import ciroma from '../../assets/ciroma.png';
import ring from '../../assets/ring.png';

const BodyAbout = () => (
  <>
    <main className="body-about">
      <section>
        <h3 className="section-title">Kovad Ceramics</h3>

        <div className="excellent-group-container1">
          <div className="excellent-group-container2">
            <Fade left>
              <div className="excellent-group-image-container">
                <Suspense fallback={<FullPageSpinner />}>
                  <img src={smilingLady} alt="smiling lady" />
                </Suspense>
              </div>
            </Fade>
            <Fade right>
              <div className="excellent-group-text">
                <p>
                  Kovad Ceramics is a subsidiary company of Kovad Ventures.
                  Kovad Ceramics includes:
                </p>
                <ul>
                  <li>Kovad Ceramics Sales of Tiles & Marbles</li>
                  <li>
                    Kovad Ceramics Installation & Maintenance of Tiles & Marbles{' '}
                  </li>
                </ul>
                <p>
                  The companies are registered as limited liability companies
                  under the Company and Allied Matters Act of 1990. Our
                  Principals have over 40 years of combined experience in
                  sourcing the best quality tiles and marbles from any part of
                  the world, at an affordable market price to our end users. We
                  added installation and maintenance services of tiles and
                  marbles to our service delivery lists so that our customers
                  which are home owners won't need to go through stress of how
                  they can get a trustworthy and top class tilers or marbles
                  installers technicians. Our personnel have the right skills
                  and experience to deliver bespoke and highly acceptable
                  standard when you engage our service. Today, we are recognised
                  as trustworthy wholesalers of tiles and marbles in Nigeria
                  which all the products we sell are SON certified.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <h3 className="section-title text-right pr-5">Vision and Mission</h3>
      <div className="vision">
        <div className="vision-text-container">
          <div>
            <h3>Vision</h3>
            <p>
              Pioneering excellence in sales, repair, and installation of
              marbles, ceramics, and rubber tiles, shaping spaces with enduring
              beauty and precision
            </p>
          </div>
          <div>
            <h3 className="text-right">Mission</h3>
            <p>
              Transforming spaces with expert sales, repair, and installation of
              marbles, ceramics, and rubber tiles.
            </p>
          </div>
        </div>
      </div>
      <section />

      <section className="directors mt-5">
        <h3 className="section-title text-right pr-5">Meet Our Team</h3>
        <Fade>
          <div className="directors-container">
            <div className="director-container">
              <div className="director-image-container pb-3">
                <Suspense fallback={<FullPageSpinner />}>
                  <img src={imagePlaceholder} alt="director1" />
                </Suspense>
              </div>
              <h4>Mr Abimbola Ajao</h4>
              <p>Chairman</p>
            </div>

            <div className="director-container">
              <div className="director-image-container pb-3">
                <Suspense fallback={<FullPageSpinner />}>
                  <img src={imagePlaceholder} alt="director2" />
                </Suspense>
              </div>
              <meta
                property="keywords"
                content="Who founded Kovad Ceramics Mr. Abimbola Ajao, Director Mr. Toheeb Adetunde, 
        Chairman Mr. Abimbola Ajao, CTO Mr. Olabanji Smith"
              />
              <h4>Mr. Toheeb Adetunde</h4>
              <p>Director</p>
            </div>

            <div className="director-container">
              <div className="director-image-container pb-3">
                <Suspense fallback={<FullPageSpinner />}>
                  <img src={imagePlaceholder} alt="director3" />
                </Suspense>
              </div>
              <h4>Mr Olabanji Smith</h4>
              <p>C.T.O</p>
            </div>
          </div>
        </Fade>
      </section>
    </main>
  </>
);

export default BodyAbout;
