import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';


const Li = styled.li`
    display: flex;
    height: 100%;
    cursor: pointer;

  
`;
const StyledNavLink = styled(NavLink)`
    display: flex;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    border-bottom:2px solid transparent;
    padding: 1 rem;
    margin: 0 1rem;
    transition: all 0.2s;
    color:#424242;
`;

const Buttonwrap =styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    color: rgba(51,51,51,1) ;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: 0;
    outline: 0;
    border-radius: 50px;
    padding:13px;
    background-color:#f7f7f7;
    text-shadow: 1px 1px 0 #FFF;
    &:hover {
      box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
    }
    &:active {
      box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
    }
`




const NavItem = ({link, children,clicked}) =>{
    return (
        <Li>
            
            <StyledNavLink  onClick={clicked} to={link}>
            <Buttonwrap>
                {children}
                </Buttonwrap>
                </StyledNavLink>
            
        </Li>
    )
}

export default NavItem