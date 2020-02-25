import React from 'react'
import styled from 'styled-components';

const LogoWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    text-transform: uppercase;
    font-size: 16px;
    padding-top: 30px;
    padding-left: 16px;
    padding-right: 16px;
    letter-spacing: -0.2px;
    display: absolute;
    float:left;
   
    font-family: 'Lato', sans-serif;
    border-bottom:2px solid transparent;
    color: #61677C;
    font-weight: 600;
    text-shadow: 1px 1px 1px #FFF;
`


const Logo = () =>{
    return (
        <LogoWrapper>
            Portfolio
        </LogoWrapper>
    )
}
export default Logo