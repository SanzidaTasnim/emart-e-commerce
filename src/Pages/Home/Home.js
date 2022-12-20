import React from 'react';
import styled from 'styled-components';
import Categories from '../../Components/Categories/Categories';
import Footer from '../../Components/Footer/Footer';
import Announcement from '../../Components/Navbar/Announcement';
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Products from '../../Components/Products/Products';
import Slider from '../../Components/Slides/Slides';

const Home = () => {
  const Container = styled.div`
    height: 90px;
    background-color: #f1f1f1;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;
  `;
  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
      </Container>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
