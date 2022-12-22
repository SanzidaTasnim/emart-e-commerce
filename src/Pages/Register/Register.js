import React from 'react';
import styled from 'styled-components';
import Announcement from '../../Components/Navbar/Announcement';
import Navbar from '../../Components/Navbar/Navbar';
import { medium } from '../../Responsive';

const Register = () => {
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
    width: 50%;
    height: 500px;
    background-color: #3686bd;
    display: flex;
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  `;
  const Left = styled.div`
    flex: 1;
    color: #fff;
    padding: 80px 30px;
    ${medium({padding: '30px 20px'})}
  `;
  const Right = styled.div`
    flex: 1;
    background-color: #fff;
    border-radius: 0 10px 10px 0;
    padding: 50px 20px;
  `;
  const Text = styled.h1`
    font-size: '35px';
    text-transform: uppercase;
    padding-bottom: 20px;
  `;
  const Desc = styled.p`
    text-align: justify;
    padding-bottom: 20px;
    font-size: 16px;
  `;
  const Button = styled.button`
    margin-top: 10px;
    width: 170px;
    color: #333;
    padding: 10px 20px;
    font-weight: 600;
    border-radius: 5px 0 5px 0;
    border: 0;
    cursor: pointer;
  `;
  const Title = styled.h2`
    font-size: '20px';
    text-transform: uppercase;
    color: #3686bd;
    padding-bottom: 30px;
  `;
  const FirstRow = styled.div`
    display: flex;
  `;
  const LeftRow = styled.div`
  `;
  const RightRow = styled.div`
  `;
  const SecondRow = styled.div`
    margin: 10px 0;
  `;
  const Label = styled.label`
    color: #444;
    font-weight: 500;
    font-size: 17px;
    display: inline-block;
    padding-bottom: 10px; 
    margin-left: ${props => (props.mg) && '10px'};
  `;
  const Input = styled.input`
    width: 150px;
    padding: 7px 0;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-left: ${props => (props.mg) && '10px'};
  `;
  const Sinput = styled.input`
    width: 315px;
    padding: 7px 0;
    border: 1px solid lightgray;
    border-radius: 5px;
  `;
  const LastRow = styled.div`
    margin: 30px 0;
    display: flex;
  `
  const Cinput = styled.input`
    margin-right: 10px;
  `
  const CheckText = styled.p`
    
  `
  const LastButton = styled.button`
    padding: 10px 20px;
    background-color: #3686bd;
    color: #fff;
    border-radius: 5px 0 5px 0;
    border: 0;
    font-weight: 600;
    cursor: pointer;
  `
  const Term = styled.span`
    color: #3686bd;
    font-weight: bold;
    border-bottom: 2px solid #3686bd;
  `
  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
      </Container>
      <Wrapper>
        <Table>
          <Left>
            <Text>Information</Text>
            <Desc>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              facere sequi dicta accusamus modi alias nulla perspiciatis iure,
              vel ut eius distinctio quasi consequatur sint harum necessitatibus
              aliquam. Id, ea.
            </Desc>
            <Desc>
              <b>Description: </b>Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Exercitationem quis eligendi nihil qui magni
              reprehenderit aliquam expedita odit repudiandae nostrum.
            </Desc>
            <Button>Have An Account</Button>
          </Left>
          <Right>
            <Title>Register form</Title>
            <FirstRow>
              <LeftRow>
                <Label for="firstName">First Name</Label>
                <Input id="firstName" type="text"/>
              </LeftRow>
              <RightRow>
                <Label for="lastName">Last Name</Label>
                <Input id="lastName" type="text"/>
              </RightRow>
            </FirstRow>
            <SecondRow>
              <RightRow>
                <Label for="email">Your Email</Label>
                <div>
                  <Sinput id="email" type="email"/>
                </div> 
              </RightRow>
            </SecondRow>
            <FirstRow>
              <LeftRow>
                <Label for="password">Password</Label>
                <Input id="password" type="password"/>
              </LeftRow>
              <RightRow>
                <Label for="confirm" mg={true}>Confirm Password</Label>
                <Input id="confirm" mg={true} type="password"/>
              </RightRow>
            </FirstRow>
            <LastRow>
               <Cinput  type="checkbox"/>
               <CheckText>
                  I Agree to the <Term>Terms & Conditions</Term>
               </CheckText>
            </LastRow>
            <LastButton>
               Register Now
            </LastButton>
          </Right>
        </Table>
      </Wrapper>
    </div>
  );
};

export default Register;
