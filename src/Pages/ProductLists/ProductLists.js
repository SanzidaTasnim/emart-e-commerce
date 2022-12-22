import React from 'react';
import styled from 'styled-components';
import Footer from '../../Components/Footer/Footer';
import Announcement from '../../Components/Navbar/Announcement';
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Products from '../../Components/Products/Products';
import { medium } from '../../Responsive';

const ProductLists = () => {
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
    ${medium({width: '95%'})}
  `;
  const Title = styled.h1`
    padding: 30px 0;
    margin-left: 5px;
    font-size: 35px;
    color: Teal;
  `;
  const FilterItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  `;
  const Filter = styled.div`
    display: flex;
  `;
  const FilterText = styled.p`
    font-size: 25px;
    font-weight: 500;
    margin-right: 10px;
  `;
  const Select = styled.select`
    margin-right: 10px;
    background-color: teal;
    color: white;
    padding: 7px 12px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 25px grey;
    &:focus{
      outline: 0;
    }
  `;
  const Option = styled.option``;
  return (
    <div>
      <NavWrap>
        <Announcement />
        <Navbar />
      </NavWrap>
      <Container>
        <Title>OUR PRODUCTS </Title>
        <FilterItem>
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select>
              <Option selected disabled>
                Color
              </Option>
              <Option>White</Option>
              <Option>Red</Option>
              <Option>Black</Option>
              <Option>Yellow</Option>
              <Option>Orange</Option>
              <Option>Blue</Option>
              <Option>Brown</Option>
            </Select>
            <Select>
              <Option selected disabled>
                Size
              </Option>
              <Option>XXXL</Option>
              <Option>XXL</Option>
              <Option>XL</Option>
              <Option>L</Option>
              <Option>M</Option>
              <Option>S</Option>
              <Option>XS</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price(ascending)</Option>
              <Option>Price(descending)</Option>
            </Select>
          </Filter>
        </FilterItem>
      </Container>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductLists;
