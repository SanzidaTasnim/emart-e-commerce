import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const Product = ({ item }) => {
  const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    opacity: 0;
    transition: ease 0.5s;
  `;
  const Image = styled.img`
    width: 100%;
    height: 90%;
    transition: ease 0.5s;
  `;
  const Container = styled.div`
    flex: 20%;
    background-color: #f1f1f1;
    margin: 6px;
    height: 300px;
    position: relative;
    &:hover ${Info} {
      opacity: 1;
    }
    &:hover ${Image} {
      transform: scale(1.02);
    }
  `;
  const ImgContainer = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    z-index: 5;
  `;

  const ContentContainer = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;
    transition: ease 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  `;
  return (
    <Container>
      <ImgContainer>
        <Image src={item.img}></Image>
      </ImgContainer>
      <Info>
        <ContentContainer>
          <Icon>
            <ShoppingCartIcon />
          </Icon>
          <Icon>
            <FavoriteIcon />
          </Icon>
          <Icon>
            <SearchIcon />
          </Icon>
        </ContentContainer>
      </Info>
    </Container>
  );
};

export default Product;
