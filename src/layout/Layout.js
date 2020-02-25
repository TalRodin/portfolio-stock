import React from 'react'
import Navbar from '../components/Navbar'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Back = styled.div`
background-color:#f7f7f7;
height:700px;
width:100%;
`


const Layout = ({children, loggedIn}) =>(
  <Back >
     
      <Navbar loggedIn={loggedIn}/> 
      <div>
          {children}
      </div>

  </Back>
)

const mapStateToProps = ({firebase}) =>({
  loggedIn: firebase.auth
})

export default connect(mapStateToProps)(Layout)