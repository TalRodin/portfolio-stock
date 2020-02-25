import React from 'react'
import styled from 'styled-components';

const LogoWrapper = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    padding-top: 16px;
    display: flex;
    text-decoration: none;
    border-bottom:2px solid transparent;
`


const Logo = () =>{
    return (
        <LogoWrapper>
            Portfolio
        </LogoWrapper>
    )
}
export default Logo