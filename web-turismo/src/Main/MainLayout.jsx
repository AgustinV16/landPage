// Layout de la pagina
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CarrouselBody from '../Components/CarrouselBody';
import SearchBar from '../Components/SearchBar';
import CardsSection from '../Components/CardsSection';

const MainLayout = () => {
  return (
    <>
      <Header />
      <CarrouselBody />
      <SearchBar />
      <CardsSection />
      <Footer />
    </>
  );
};

export default MainLayout;
