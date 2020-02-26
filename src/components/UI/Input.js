import React from 'react'
import styled from 'styled-components'

const InputWrapper=styled.div`
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 1.5rem;
    flex-direction: column;
    margin-left:70%;
    color: rgba(51,51,51,1) ;
`
const StyledInput = styled.input`
    margin-right: 8px;
    padding: 1.2rem 2rem;
    box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #fff;
    width: 100%;
    color: rgba(51,51,51,1) ;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    float:left;
    width:30%;
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

const Input = ({field, form:{touched, errors}, ...props})=>{
    return (
        <InputWrapper>
          <StyledInput {...field} {...props}/>
          <div >{errors[field.name]}</div>
        </InputWrapper>
    )
}
export default Input