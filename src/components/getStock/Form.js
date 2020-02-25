import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
margin-right: 20px;
padding: 1.2rem 2rem;
box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #fff;
width: 100%;
box-sizing: border-box;
transition: all 0.2s ease-in-out;
text-transform: uppercase;
appearance: none;
float:left;
width:50%;
padding:16px;
background-color:#f7f7f7;
border-radius: 50px;
-webkit-appearance: none;
border: 0;
  outline: 0;
  text-shadow: 1px 1px 0 #fff;
&:focus {
  box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px #fff;
}
`;

const ButtonWrapper=styled.button`
float:left;
@import url('https://fonts.googleapis.com/css?family=Lato');
color: #61677C;
text-transform: uppercase;
font-family: 'Lato', sans-serif;
font-weight: bold;
box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
transition: all 0.2s ease-in-out;
cursor: pointer;
border: 0;
outline: 0;

border-radius: 5px;

padding:16px;
background-color:#f7f7f7;
text-shadow: 1px 1px 0 #FFF;
&:hover {
  box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
}

&:active {
  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
}

`
const Form = props =>(
    <form onSubmit={props.getPrice}>
    <StyledInput type="text" name="symbol" placeholder='Symbol...'/>
    <ButtonWrapper>Get price</ButtonWrapper>
    </form>
)
export default Form