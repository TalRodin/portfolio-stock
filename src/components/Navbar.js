import React from 'react'
import Logo from './Logo'
import NavItems from './Navitems'

const Navbar = ({loggedIn})=>{
    return (
        <div>
            <Logo />
            <NavItems loggedIn={loggedIn}/>
        </div>
    )
}
export default Navbar