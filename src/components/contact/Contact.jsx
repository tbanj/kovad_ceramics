import React, { Fragment, lazy, Suspense } from 'react';
import MetaTags from 'react-meta-tags';
import contact from '../../assets/contact.png';
import Footer from '../footer/Footer';
import FullPageSpinner from '../loader/FullPageSpinner';

const HeaderGeneral = lazy(() => import('../header/HeaderGeneral'));
const BodyContact = lazy(() => import('../Body/BodyContact'));

const Contact = () => {
  const text = 'Contact Us';
  return (
    <>
      <MetaTags>
        <title>Contact: Kovad Ceramics</title>
        <meta
          name="description"
          content="At Kovad Ceramics, at 142, Lawanson Road, Otun-Oba  Bus-stop, Itire, Lagos, Nigeria. Working with you and for you in partnership to find lasting solutions"
        />
        <meta property="og:title" content="Contact" />
        <meta
          property="keywords"
          content="Kovad Ceramics contact,Kovad Ceramics address, Logistics , Kovad Ceramics phone, haulage Lagos"
        />
      </MetaTags>

      <Suspense fallback={<FullPageSpinner />}>
        <>
          <HeaderGeneral image={contact} text={text} />
          <BodyContact />
        </>
      </Suspense>

      <Footer />
    </>
  );
};

export default Contact;
