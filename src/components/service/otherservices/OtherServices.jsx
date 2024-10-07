import React, { Fragment, Suspense, lazy } from 'react';
import MetaTags from 'react-meta-tags';
import ServiceCard from '../ServiceCard';

import bannerImage from '../../../assets/others-banner.png';
import business from '../../../assets/business.png';
import general from '../../../assets/general.png';
import supply from '../../../assets/supply.png';
// import HeaderGeneral from '../../header/HeaderGeneral';
import Form1 from '../../forms/Form1';
import Footer from '../../footer/Footer';
import FullPageSpinner from '../../loader/FullPageSpinner';
import './otherservices.css';

const HeaderGeneral = lazy(() => import('../../header/HeaderGeneral'));
const OtherServices = () => {
  const text = 'Other Business Services';

  return (
    <>
      <MetaTags>
        <title>Other Business Services: Kovad Ceramics</title>
        <meta
          name="description"
          content="Kovad Ceramics is structured and equipped to provide the following business support services "
        />
        <meta property="og:title" content="Other Business Services" />
        <meta
          property="keywords"
          content="business management, general contract, supply chain management,"
        />
      </MetaTags>

      <Suspense fallback={<FullPageSpinner />}>
        <HeaderGeneral image={bannerImage} text={text} />
      </Suspense>
      <main>
        <section className="service-container">
          <h3 className="section-title">Our Other Business Services</h3>

          <div className="service-text">
            <p>
              Kovad Ceramics is structured and equipped to provide the following
              business support services:
            </p>
          </div>
        </section>

        <section className="services">
          <div className="service-cards-container">
            <Suspense fallback={<FullPageSpinner />}>
              <ServiceCard image={business} title={'BUSINESS MANAGEMENT'} />
            </Suspense>
            <Suspense fallback={<FullPageSpinner />}>
              <ServiceCard image={general} title={'GENERAL CONTRACT'} />
            </Suspense>
            <Suspense fallback={<FullPageSpinner />}>
              <ServiceCard image={supply} title={'SUPPLY CHAIN MANAGEMENT'} />
            </Suspense>
          </div>
        </section>

        <Form1 contact="" />
      </main>

      <Footer />
    </>
  );
};

export default OtherServices;
