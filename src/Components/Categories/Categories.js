import React from 'react';
import {category} from './../../data';
import styled from 'styled-components';
import Category from '../Category/Category';

const Categories = () => {
   const Container = styled.div`
      width: 1300px;
      height: 500px;
      margin: 30px auto;
      display: flex;
   `
  return (
    <Container>
      {
         category.map(item => <Category item = {item}/>)
      }
    </Container>
  )
}

export default Categories