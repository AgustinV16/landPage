import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SearchBar from '../Components/SearchBar';
import SectionResults from '../Components/SectionResults';

const ResultSearch = () => {
  return (
    <>
      <Header />
      <SearchBar/>
      <SectionResults/>
      <Footer />
    </>
  );
};

export default ResultSearch;