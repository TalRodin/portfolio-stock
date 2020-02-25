import React from 'react'
import Logo from './Logo'
import NavItems from './Navitems'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 140rem;
    margin: 0 auto;
    height: 100%;
`
const NavbarWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
`;

const FixedWrapper = styled.header`
            position: fixed;
            background-color: #f7f7f7;
            padding: 0rem 2rem;
            margin-left: 5px;
            margin-top: 10px;
            border-radius: 4px;
            top: 5px;
            left: 5px;
            width: 94%;
            height: 4rem;
            box-shadow:
                    -2.3px -2.3px 3.8px rgba(255,255,255, 0.2),
                    -6.3px -6.3px 10.6px rgba(255,255,255, 0.3),
                    -15.1px -15.1px 25.6px rgba(255,255,255, 0.4),
                    -50px -50px 85px rgba(255,255,255, 0.07),
                    2.3px 2.3px 3.8px rgba(0, 0, 0, 0.024),
                    6.3px 6.3px 10.6px rgba(0, 0, 0, 0.035),
                    15.1px 15.1px 25.6px rgba(0, 0, 0, 0.046),
                    50px 50px 85px rgba(0, 0, 0, 0.07);
                    

`;
const Navbar = ({loggedIn})=>{
    return (
        <FixedWrapper >
        <Container>
        <NavbarWrapper>
        <Logo />
        <NavItems loggedIn={loggedIn}/>
        </NavbarWrapper>
        </Container>
        </FixedWrapper>
    )
}
export default Navbar