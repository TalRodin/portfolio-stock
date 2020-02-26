import React from 'react'
import styled from 'styled-components';

const TextWrap = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    color: rgba(51,51,51,1)   
`
const SumWrap = styled.div`
    float:right;
`
const Line=styled.div`
    padding-top: 5px;
    border-top: 1px solid #eee;
`
const Bold = styled.div`
    font-weight: bold;
    float:left;
`
const Symbol = ({symbol}) =>{
    return (
        <TextWrap>
          (BUY) <Bold>{symbol.symbol}</Bold> · {symbol.quantity} Shares <SumWrap>@ {symbol.price}</SumWrap>
          <Line></Line>
        </TextWrap>
    )
}
export default Symbol