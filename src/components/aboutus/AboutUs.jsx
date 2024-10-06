import React, { Fragment, Suspense, lazy } from 'react';
import MetaTags from 'react-meta-tags';
/* import HeaderGeneral from '../header/HeaderGeneral';
import BodyAbout from '../Body/BodyAbout'; */
import Footer from '../footer/Footer';
import about from '../../assets/about.png';
import FullPageSpinner from '../loader/FullPageSpinner';

const HeaderGeneral = lazy(() => import('../header/HeaderGeneral'));
const BodyAbout = lazy(() => import('../Body/BodyAbout'));

const About = () => {
  const text = 'About Kovad Ceramics';
  return (
    <>
      {/* indexing */}
      <MetaTags>
        <title>About Kovad Ceramics: Kovad Ceramics</title>
        <meta
          name="description"
          content="When Kovad Ceramics is extablished, the products they sell in wholesales and retail. Services that Kovad Ceramics render"
        />
        <meta property="og:title" content="About Kovad Ceramics" />
        <meta
          property="keywords"
          content="Who founded Kovad Ceramics Mr. Abimbola Ajao, Director Mr. Toheeb Adetunde, 
        Chairman Mr. Abimbola Ajao, CTO Mr. Olabanji Smith"
        />
      </MetaTags>

      <Suspense fallback={<FullPageSpinner />}>
        <>
          <HeaderGeneral image={about} text={text} />
          <BodyAbout />
        </>
      </Suspense>

      <Footer />
    </>
  );
};

export default About;
