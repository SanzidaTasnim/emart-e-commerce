import React from 'react'
import styled from 'styled-components'
import { productItems } from '../../data'
import { medium } from '../../Responsive'
import Product from '../Product/Product'

const Products = () => {
   const Container = styled.div`
      width: 1300px;
      margin: 50px auto;
      display: flex;
      flex-wrap: wrap;
      ${medium({width: '100%'})}
   `
  return (
    <Container>
      {
         productItems.map(item => (
            <Product item={item} key={item.id}/>
         ))
      }
    </Container>
  )
}

export default Products;