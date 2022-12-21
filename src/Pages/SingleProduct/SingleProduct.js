import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Footer from '../../Components/Footer/Footer';
import Announcement from '../../Components/Navbar/Announcement';
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from '../../Components/Newsletter/Newsletter';
import productImg from './../../logo/product3.png';

const SingleProduct = () => {
  const NavWrap = styled.div`
    height: 90px;
    background-color: #f1f1f1;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;
  `;
  const Container = styled.div`
    width: 1300px;
    margin: 0 auto;
    display: flex;
  `;
  const Left = styled.div`
    flex: 1;
    background-color: #f1f1f1;
    margin: 20px auto;
  `;
  const Right = styled.div`
    flex: 1;
    margin: 20px;
  `;
  const Title = styled.h1`
    font-size: 45px;
    font-weight: 200;
    padding-bottom: 25px;
  `;
  const Desc = styled.p`
    font-size: 20px;
    font-weight: 400;
    text-align: justify;
  `;
  const Price = styled.h3`
    font-size: 45px;
    font-weight: 100;
    padding: 20px 0;
  `;
  const Image = styled.img`
    width: 80%;
  `;
  const RightContent = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
    padding-bottom: 20px;
  `;
  const RightWrap = styled.div`
    display: flex;
  `;
  const Text = styled.h4`
    font-size: 30px;
    margin-right: 10px;
  `;
  const RightColor = styled.div`
    display: flex;
  `;
  const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.bg};
    margin: 10px 5px;
    cursor: pointer;
  `;
  const RightSize = styled.div`
    display: flex;
  `;
  const Select = styled.select`
    background-color: teal;
    color: white;
    padding: 7px 12px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 25px grey;
    &:focus {
      outline: 0;
    }
  `;
  const Option = styled.option``;
  const RightAmount = styled.div`
    display: flex;
  `;
  const Num = styled.p`
    width: 50px;
    display: block;
    padding: 5px 10px;
    background-color: tomato;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const RightButton = styled.button`
    width: 80%;
    margin-top: 30px;
    margin-left: 58px;
    padding: 12px;
    background-color: teal;
    border: 0;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    border-radius: 5px;
  `;

  const removeButton = {
    width: '30px',
    padding: '5px 10px',
    backgroundColor: 'teal',
    color: 'white',
    borderRadius: '5px',
    margin: '5px',
    cursor: 'pointer',
  };
  return (
    <div>
      <NavWrap>
        <Announcement />
        <Navbar />
      </NavWrap>
      <Container>
        <Left>
          <Image src={productImg}></Image>
        </Left>
        <Right>
          <Title>Formal Pant</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste rem
            porro adipisci quam sit fugiat quibusdam dolorum placeat inventore
            consequuntur in exercitationem enim eveniet, dicta modi dignissimos,
            eligendi esse est doloremque odit aliquid? Reprehenderit nisi
            dolores laudantium quae, ipsam aperiam! Reprehenderit nisi dolores
            laudantium quae, ipsam aperiam!
          </Desc>
          <Price>$18</Price>
          <RightContent>
            <RightWrap>
              <Text>Color</Text>
              <RightColor>
                <Circle bg="black"></Circle>
                <Circle bg="blue"></Circle>
                <Circle bg="grey"></Circle>
              </RightColor>
            </RightWrap>
            <RightSize>
              <Text>Size</Text>
              <Select>
                <Option selected>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XLL</Option>
              </Select>
            </RightSize>
          </RightContent>
          <RightAmount>
            <Remove style={removeButton} />
            <Num>1</Num>
            <Add style={removeButton} />
          </RightAmount>
          <RightButton>ADD TO CART</RightButton>
        </Right>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
