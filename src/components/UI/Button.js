import React from 'react'
import styled from 'styled-components'

const ButtonWrapper=styled.button`
@import url('https://fonts.googleapis.com/css?family=Lato');
color:#f1555a;
text-transform: uppercase;
font-family: 'Lato', sans-serif;
font-weight: bold;
box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
transition: all 0.2s ease-in-out;
cursor: pointer;
border: 0;
outline: 0;
width:30%;
border-radius: 50px;
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




const Button = ({children, disabled, loading, ...rest}) =>{
    return (
        <ButtonWrapper disabled={disabled} {...rest}>
            {loading ? loading: children}
        </ButtonWrapper>
    )
}

export default Button