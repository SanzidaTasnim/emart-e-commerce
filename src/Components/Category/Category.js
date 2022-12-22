import React from 'react'
import styled from 'styled-components'
import { medium } from '../../Responsive'

const Category = ({item}) => {
   const Wrapper = styled.div`
      flex: 1;
      width: 100%;
      height: 100%;
      margin: 10px;
      position: relative;
      &:before{
         content: '';
         width: 100%;
         height: 100%;
         background-color: rgba(0,0,0,0.4);
         position: absolute;
         top: 0;
         left: 0;
      }
   `
   const Img = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
   `
   const ContentContainer = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
   `
   const Title = styled.h3`
      font-size: 33px;
      color: #fff;
      margin-bottom: 15px;
      ${medium({fontSize: '26px'})}
   `

   const Button = styled.button`
      width: 120px;
      padding: 7px 12px;
      font-weight: 500;
      border-radius: 5px;
      border: 0;
      cursor: pointer;
   `
  return (
    <Wrapper>
      <Img src={item.img}></Img>
      <ContentContainer>
         <Title>{item.title}</Title>
         <Button>SHOP NOW</Button>
      </ContentContainer>
    </Wrapper>
  )
}

export default Category