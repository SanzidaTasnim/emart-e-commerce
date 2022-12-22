import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { medium } from '../../Responsive';

const Newsletter = () => {
  const Container = styled.div`
    width: 1300px;
    margin: 0 auto;
    background-color: #f1f1f1;
    text-align: center;
    padding-bottom: 100px;
    ${medium({width: '100%'})}
  `;
  const Title = styled.h1`
    font-size: 60px;
    padding-top: 100px;
    padding-bottom: 25px;
    ${medium({fontSize: '40px'})}
  `;
  const Desc = styled.div`
    font-size: 25px;
    letter-spacing: 3px;
    text-transform: capitalize;
  `;
  const InputContainer = styled.div``;
  const Input = styled.input`
    width: 600px;
    margin-top: 25px;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 5px 0 0 5px;
  `;
  const Button = styled.button`
    padding: 10px;
    width: 100px;
    background-color: teal;
    color: white;
    transform: translate(0px, 6px);
    border: none;
    border-radius: 0 5px 5px 0;
  `;
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Desc>Get timely update for your favorite product</Desc>
      <InputContainer>
        <Input placeholder="Your Email..." />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
