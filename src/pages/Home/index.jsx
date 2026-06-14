import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import BenefitsSection from './BenefitsSection';
import FeaturesSection from './FeaturesSection';
import DemoVideoSection from './DemoVideoSection';
import CtaSection from './CtaSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Saku App - Aplikasi Pencatatan Keuangan Gratis untuk Anak Muda Indonesia | Catat Pengeluaran dalam 10 Detik</title>
        <meta
          name="description"
          content="Saku bantu kamu kelola keuangan dengan mudah dan cepat. Fitur widget, AI insights, budgeting, dan notifikasi pintar. 100% gratis untuk anak muda Indonesia. Download sekarang!"
        />
        <meta property="og:title" content="Saku App - Aplikasi Pencatatan Keuangan Gratis untuk Anak Muda Indonesia | Catat Pengeluaran dalam 10 Detik" />
        <meta property="og:description" content="Saku bantu kamu kelola keuangan dengan mudah dan cepat. Fitur widget, AI insights, budgeting, dan notifikasi pintar. 100% gratis untuk anak muda Indonesia. Download sekarang!" />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;