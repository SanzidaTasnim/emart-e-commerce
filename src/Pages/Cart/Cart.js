import React from 'react';
import styled from 'styled-components';
import Announcement from '../../Components/Navbar/Announcement';
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from './../../Components/Newsletter/Newsletter';
import Footer from './../../Components/Footer/Footer';
import { Add, Remove } from '@mui/icons-material';
import { medium } from '../../Responsive';

const Cart = () => {
  const Container = styled.div`
    height: 90px;
    background-color: #f1f1f1;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;
  `;
  const Wrapper = styled.div`
    width: 1300px;
    margin: 0 auto;
    ${medium({width: '90%'})}
  `;
  const Title = styled.h1`
    text-align: center;
    font-weight: 200;
    padding-top: 30px;
    padding-bottom: 40px;
    font-size: 35px;
    text-transform: uppercase;
    ${medium({fontSize: '25px'})}
  `;
  const ButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Button = styled.button`
    width: 170px;
    padding: 10px 10px;
    background-color: ${(props) => props.bg};
    text-transform: uppercase;
    color: ${(props) => (props.bg === 'teal' ? '#fff' : '#333')};
    font-weight: 600;
    border: ${(props) => (props.bg === 'teal' ? 'none' : '2px solid #333')};
    border-radius: 5px;
    cursor: pointer;
  `;
  const LinkWrap = styled.div``;
  const Span = styled.span`
    font-size: 20px;
    text-decoration: underline;
    margin-left: 20px;
    font-weight: 500;
  `;
  const CartItem = styled.div`
    display: flex;
    margin: 30px 0;
    padding-top: 30px;
    padding-bottom: 20px;
  `;
  const Div = styled.div`
    width: 60%;
  `;
  const CartProduct = styled.div`
    padding: 30px 0;
    flex: 1;
    display: flex;
  `;
  const ImageWrap = styled.div`
    flex: 1;
  `;
  const Image = styled.img`
    width: 80%;
  `;
  const Info = styled.div`
    flex: 2;
  `;
  const InfoTitle = styled.p`
    padding-bottom: 15px;
  `;
  const Color = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.bg};
    margin-bottom: 15px;
  `;
  const Quantity = styled.div`
    flex: 1;
  `;
  const QuantityWrap = styled.div`
    display: flex;
  `;
  const Num = styled.p`
    font-size: 20px;
    padding: 0 5px;
  `;
  const Price = styled.p`
    font-size: 25px;
    font-weight: 200;
    padding-top: 20px;
    padding-left: 7px;
  `;
  const CartSummary = styled.div`
    width: 30%;
    border: 2px solid #eee;
    padding: 20px 0;
    box-shadow: 5px 5px 30px #eee;
    border-radius: 5px;
    margin-left: auto;
  `;
  const SumTitle = styled.h1`
    font-size: 35px;
    text-transform: uppercase;
    padding: 10px 0 20px 20px;
    font-weight: 200;
  `;
  const SumOption = styled.p`
    font-size: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
  `;
  const SumButton = styled.button`
    text-transform: uppercase;
    width: 140px;
    font-weight: 500;
    margin-left: 20px;
    padding: 5px 0;
    margin-bottom: 40px;
    cursor: pointer;
  `;
  const Hr = styled.hr`
    background-color: #eee;
    color: #eee;
    height: 1px;
  `
  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
      </Container>
      <Wrapper>
        <Title>your bag</Title>
        <ButtonWrap>
          <Button bg="transparent">Continue Shopping</Button>
          <LinkWrap>
            <Span>Shopping Bag(2)</Span>
            <Span>Your Wishlist(0)</Span>
          </LinkWrap>
          <Button bg="teal">Checkout Now</Button>
        </ButtonWrap>
        <CartItem>
          <Div>
            <CartProduct>
              <ImageWrap>
                <Image src="./images/product6.png"></Image>
              </ImageWrap>
              <Info>
                <InfoTitle>
                  <b>Product: </b> MEN'S LEATHER BELT
                </InfoTitle>
                <InfoTitle>
                  <b>ID: </b> 9876789234
                </InfoTitle>
                <Color bg="black"></Color>
                <InfoTitle>
                  <b>Size: </b>37.5
                </InfoTitle>
              </Info>
              <Quantity>
                <QuantityWrap>
                  <Add style={{ cursor: 'pointer' }} />
                  <Num>2</Num>
                  <Remove style={{ cursor: 'pointer' }} />
                </QuantityWrap>
                <Price>$30</Price>
              </Quantity>
            </CartProduct>
            <Hr />
            <CartProduct>
              <ImageWrap>
                <Image src="./images/product7.png"></Image>
              </ImageWrap>
              <Info>
                <InfoTitle>
                  <b>Product: </b> MEN'S LEATHER WALLET
                </InfoTitle>
                <InfoTitle>
                  <b>ID: </b> 9876789235
                </InfoTitle>
                <Color bg="brown"></Color>
                <InfoTitle>
                  <b>Size: </b>37.5
                </InfoTitle>
              </Info>
              <Quantity>
                <QuantityWrap>
                  <Add style={{ cursor: 'pointer' }} />
                  <Num>1</Num>
                  <Remove style={{ cursor: 'pointer' }} />
                </QuantityWrap>
                <Price>$15</Price>
              </Quantity>
            </CartProduct>
          </Div>
          <CartSummary>
            <SumTitle>Order summary</SumTitle>
            <SumOption>Subtotal: $80</SumOption>
            <SumOption>Estimated Shipping: $5.90</SumOption>
            <SumOption>Shipping Discount: $5.90</SumOption>
            <SumOption>Total: $80</SumOption>
            <SumButton>Checkout Now</SumButton>
          </CartSummary>
        </CartItem>
      </Wrapper>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
