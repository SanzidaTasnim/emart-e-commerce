import React from 'react';
import styled from 'styled-components';
import Announcement from '../../Components/Navbar/Announcement';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slides/Slides';

const Home = () => {

   const Container = styled.div`
      height: 90px;
      background-color: #f1f1f1;
   `
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
    </Container>
  )
}

export default Home;