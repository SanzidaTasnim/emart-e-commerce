import React from 'react';
import styled from 'styled-components';
import logo from './../../logo/logo.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { medium } from '../../Responsive';

const Footer = () => {
   const Container = styled.div`
      width: 1300px;
      margin: 0 auto;
      display: flex;
      padding: 50px 0;
      ${medium({width: '95%'})}
   `
   const Left = styled.div`
      flex: 1;
   `
   const LeftLogo = styled.img`
      width: 150px;
   `
   const LeftDesc = styled.div`
      font-size: 18px;
      text-align: justify;
      font-weight: 500;
   `
   const IconContainer = styled.div`
      display: flex;
      margin-top: 20px;
   `
   const Icon = styled.div`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${props => props.bg};
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      cursor: pointer;
   `
   const Center = styled.div`
      flex: 1;
      margin-left: 40px;
   `
   const CenterTitle = styled.h3`
      font-size: 30px;
      margin-top: 20px;
      padding-bottom: 20px;
   `
   const LinkItems = styled.ul`
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
   `
   const Items = styled.li`
      list-style: none;
      width: 50%;
      font-weight: 600;
      margin: 10px 0;
      cursor: pointer;
   `
 
   const Right = styled.div`
      flex: 1;
   `
   const Address = styled.div`
     display: flex;
     margin: 20px 0;
   `
   const AddDescription = styled.div`
      font-size: 18px;
      font-weight: 500;
   `
  return (
    <Container>
      <Left>
         <LeftLogo src={logo}/>
         <LeftDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur reiciendis harum! Quidem totam nisi esse quos atque maiores veniam architecto consequatur expedita illum ad assumenda nesciunt explicabo, dolor officia?
         </LeftDesc>
         <IconContainer>
            <Icon bg="teal">
               <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </Icon>
            <Icon bg="skyblue">
               <TwitterIcon></TwitterIcon>
            </Icon>
            <Icon bg="tomato">
               <PinterestIcon></PinterestIcon>
            </Icon>
            <Icon bg='pink'>
               <InstagramIcon></InstagramIcon>
            </Icon>
         </IconContainer>
      </Left>
      <Center>
         <CenterTitle>Useful Links</CenterTitle>
         <LinkItems>
            <Items>Home</Items>
            <Items>Man Fashion</Items>
            <Items>Accessories</Items>
            <Items>Order Tracking</Items>
            <Items>Wishlists</Items>
            <Items>Cart</Items>
            <Items>Woman Fashion</Items>
            <Items>Orders</Items>
            <Items>My accounts</Items>
            <Items>Terms</Items>
         </LinkItems>
      </Center>
      <Right>
         <CenterTitle>
            Contact
         </CenterTitle>
         <Address>
            <LocationOnIcon style={{fontSize: '30px', marginRight: '10px'}}></LocationOnIcon>
            <AddDescription>
               51,Flat No. 3/B,Dhanmondi R/A,Dhaka-1207.
            </AddDescription>
         </Address>
         <Address>
            <LocalPhoneIcon style={{fontSize: '30px', marginRight: '10px'}}></LocalPhoneIcon>
            <AddDescription>
               +880 1626 987 567
            </AddDescription>
         </Address>
         <Address>
            <EmailIcon style={{fontSize: '30px', marginRight: '10px'}}></EmailIcon>
            <AddDescription>
               tasnim5sanzida@gmail.com
            </AddDescription>
         </Address>
      </Right>
      
    </Container>
  )
}

export default Footer