import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
      float:left;
      margin-left: 20px;
      box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #fff;
      transition: all 0.2s ease-in-out;
      appearance: none;
      width:90%;
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
    color: rgba(51,51,51,1);
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: 0;
    outline: 0;
    position:fixed;
    border-radius: 3px;
    margin-left:2%;
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

// Form to get stock data. It will give mistake if the stock does not exist
const Form = props =>(
    <form onSubmit={props.getPrice}>
        <StyledInput type="text" name="symbol" placeholder='Symbol...'/>
        <ButtonWrapper>Get price</ButtonWrapper>   
    </form>
)
export default Form