import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import WhySakuSection from './WhySakuSection';
import FeaturesSection from './FeaturesSection';
import DemoVideoSection from './DemoVideoSection';
import CTASection from './CTASection';

const LandingAlt = () => {
  return (
    <>
      <Helmet>
        <title>Saku App - Track Your Money in 10 Seconds | Free Finance App for Indonesian Youth</title>
        <meta 
          name="description" 
          content="Saku helps Indonesian young adults track expenses in 10 seconds. Free app with quick widget, AI insights, budget control & cloud security. Download now!" 
        />
        <meta property="og:title" content="Saku App - Track Your Money in 10 Seconds | Free Finance App for Indonesian Youth" />
        <meta property="og:description" content="Saku helps Indonesian young adults track expenses in 10 seconds. Free app with quick widget, AI insights, budget control & cloud security. Download now!" />
      </Helmet>

      <Header />
      
      <main>
        <HeroSection />
        <WhySakuSection />
        <FeaturesSection />
        <DemoVideoSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default LandingAlt;