import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
   const Headline = styled.div`
      height: 30px;
      width: 100%;
      line-height: 30px;
      background-color: teal;
      color: #fff;
      text-align: center;
      font-size: 16px;
   `
   const HeadlineInner = styled.span`
      color: tomato;
      font-weight: 600;
      cursor: pointer;
   `
  return (
    <Headline>
      Super Deal! Free shipping in order over $50. <HeadlineInner>ORDER NOW!</HeadlineInner>
    </Headline>
  )
}

export default Announcement