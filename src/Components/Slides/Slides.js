import React from 'react';
import styled from 'styled-components';
import { sliderItems } from '../../data';
import Slider from 'react-slick';
import './Slides.css';

const Slides = () => {
  const Container = styled.div`
    width: 100%;
    position: relative;
  `;
  const Wrapper = styled.div`
    height: 100%;
    width: 100%;
  `;
  const Slide = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex !important;
  `;
  const ImgContainer = styled.img`
    flex: 1;
    width:50%;
  `;
  const ContentContainer = styled.div`
    flex: 1;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
  `;
  const ContentWrap = styled.div`
    text-align: center;
  `;
  const Title = styled.h1`
    font-size: 60px;
  `;
  const Desc = styled.p`
    font-size: 24px;
    letter-spacing: 3;
    font-weight: 500;
    margin: 20px 0;
    padding: 0 99px;
    text-transform: uppercase;
  `;
  const Button = styled.button`
    width: 150px;
    padding: 10px 15px;
    font-weight: 500;
    background-color: teal;
    border: 0;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          {sliderItems.map((item) => (
            <Slide key={item.id}>
              <ImgContainer src={item.img}></ImgContainer>
              <ContentContainer>
                <ContentWrap>
                  <Title>{item.title}</Title>
                  <Desc>{item.description}</Desc>
                  <Button>SHOP NOW</Button>
                </ContentWrap>
              </ContentContainer>
            </Slide>
          ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Slides;
