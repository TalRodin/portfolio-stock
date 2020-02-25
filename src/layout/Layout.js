import React from 'react'
import Navbar from '../components/Navbar'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Back = styled.div`
background-size: 100px 100px;
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