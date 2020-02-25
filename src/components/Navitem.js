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
//   align-items: center;
  font-size: 1rem;
  border-bottom:2px solid transparent;
  padding: 1 rem;
  margin: 0 1rem;
  transition: all 0.2s;
  color:#424242;
`;

const Buttonwrap =styled.div`
  width: 100px;
  height: 45px;
  background: #F2F2F2;
  border-radius: 11px;
  text-decoration:none;
  color:#0B0B0B;
  justify-content: center;
  margin: 0 1rem;
  box-shadow: inset 0 0 15px rgba(66, 66, 66, 0), inset 0 0 20px rgba(255, 255, 255, 0), 7px 7px 15px rgba(58, 58, 58, 0.15), -7px -7px 20px white, inset 0px 0px 4px rgba(255, 255, 255, 0.2);
  transition: box-shadow 399ms ease-in-out;

  &:hover {
    box-shadow: inset 7px 7px 15px rgba(66, 66, 66, 0.15), inset -7px -7px 20px white, 0px 0px 4px rgba(255, 255, 255, 0.2);
    color:#676767;
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