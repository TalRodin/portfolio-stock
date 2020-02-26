import React from 'react'
import styled from 'styled-components';

const TextWrap = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lato');
font-size: 16px;
font-family: 'Lato', sans-serif;
color: #61677C;
position:absolute;
margin-top: 5%;
`

const Prices =props=>{
           console.log(props)
          return(
            <TextWrap>
                
                {props.symbol && <p>Symbol: {props.symbol}</p>}
                {props.price && <p>Price: {props.price}</p>}
                {props.volume && <p>Volume: {props.volume}</p>}
                {props.error && <p>{props.error}</p>}
            </TextWrap>)
}
export default Prices