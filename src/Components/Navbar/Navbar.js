import React from 'react';
import styled from 'styled-components';
import logo from './../../logo/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { medium } from '../../Responsive';

const Navbar = () => {
  const Main = styled.div`
    color: #444;
    display: flex;
    line-height: 60px;
    justify-content: space-between;
    width: 1300px;
    margin: 0 auto;
  `;
  const Left = styled.div`
    flex: 1;
    cursor: pointer;
  `;
  const LeftLogo = styled.img`
    width: 150px;
    margin-top: -22px;
  `;
  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const SearchContainer = styled.div`
    position: relative;
    ${medium({display: 'none'})}
  `;
  const Input = styled.input`
    width: 250px;
    padding: 7px 0;
    padding-left: 35px;
    border: 2px solid lightgrey;
    border-radius: 5px;

    &:focus {
      outline: 0;
    }
  `;
  const Right = styled.div`
    flex: 1;
    text-align: end;
    ${medium({textAlign: 'start',marginLeft: '120px'})}
  `;
  const RightButton = styled.button`
    font-size: 16px;
    padding: 8px 12px;
    margin-left: 10px;
    background-color: teal;
    color: #fff;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  `;
  
  return (
    <Main>
      <Left>
        <LeftLogo src={logo}/>
      </Left>
      <Center>
        <SearchContainer>
          <Input placeholder="Search..." />
          <SearchIcon
            style={{
              position: 'absolute',
              top: '21px',
              left: '80px',
              color: 'grey',
              fontSize: '25px',
            }}
          />
        </SearchContainer>
      </Center>
      <Right>
        <RightButton>Register</RightButton>
        <RightButton>Log In</RightButton>
        <Badge badgeContent={2} color="primary" style={{marginLeft: '10px' , cursor: 'pointer'}}>
            <ShoppingCartOutlinedIcon />
        </Badge>
      </Right>
    </Main>
  );
};

export default Navbar;
