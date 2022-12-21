import { Facebook, Google, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../../Components/Navbar/Announcement';
import Navbar from '../../Components/Navbar/Navbar';

const Login = () => {
  const Container = styled.div`
    height: 90px;
    background-color: #f1f1f1;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;
  `;
  const Wrapper = styled.div`
    background-color: #76e2e9;
    height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Table = styled.div`
    width: 25%;
    height: 500px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  `;
  const Wrap = styled.div`
    padding: 0 30px;
  `;
  const Title = styled.h2`
    padding: 30px 0;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
  `;
  const FirstRow = styled.div``;
  const Label = styled.label`
    font-size: 17px;
    font-weight: 600;
    color: #666;
    padding: 8px 0;
    display: block;
  `;
  const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #888;
    width: 90%;
    padding: 0 7px;
    padding-bottom: 7px;
    &:focus {
      outline: 0;
    }
  `;
  const Forgot = styled.span`
    color: #666;
    font-weight: 600;
    font-size: 14px;
    display: block;
    padding-top: 5px;
    text-align: end;
    margin-right: 15px;
  `;
  const Button = styled.button`
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 7px;
    margin-top: 20px;
    border-radius: 20px;
    font-weight: 600;
    border: 0;
    color: #fff;
    cursor: pointer;
    background-image: linear-gradient(to right, #5bcade, #b941f0);
  `;
  const IconTitle = styled.p`
    padding-top: 30px;
    padding-bottom: 10px;
    font-size: 15px;
    font-weight: 600;
    color: #666;
    text-align: center;
  `;
  const IconWrap = styled.div`
    display: flex;
    justify-content: center;
  `;
  const Icon = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${(props) => props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 0 10px;
    font-size: 34px;
    cursor: pointer;
  `;
  const SignUpButton = styled.button`
    display: block;
    width: 35%;
    margin: 0 auto;
    padding: 7px;
    border-radius: 20px;
    font-weight: 600;
    border: 0;
    color: #fff;
    cursor: pointer;
    background-image: linear-gradient(to right, #5bcade, #b941f0);
  `;
  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
      </Container>
      <Wrapper>
        <Table>
          <Wrap>
            <Title>Login</Title>
            <FirstRow>
              <Label for="name">Username</Label>
              <div>
                <Input type="text" id="name" placeholder="Type your username" />
              </div>
            </FirstRow>
            <FirstRow>
              <Label for="password">Password</Label>
              <div>
                <Input
                  type="password"
                  id="password"
                  placeholder="Type your password"
                />
              </div>
            </FirstRow>
            <Forgot>Forgot Password?</Forgot>
            <Button>LOGIN</Button>
            <IconTitle>Or Sign Up Using</IconTitle>
            <IconWrap>
              <Icon bg="teal">
                <Facebook style={{ fontSize: '20px' }} />
              </Icon>
              <Icon bg="skyblue">
                <Twitter style={{ fontSize: '20px' }} />
              </Icon>
              <Icon bg="tomato">
                <Google style={{ fontSize: '20px' }} />
              </Icon>
            </IconWrap>
            <IconTitle>Or Sign Up Using</IconTitle>
            <SignUpButton>SIGN UP</SignUpButton>
          </Wrap>
        </Table>
      </Wrapper>
    </div>
  );
};

export default Login;
