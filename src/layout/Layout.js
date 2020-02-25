import React from 'react'
import Navbar from '../components/Navbar'
import {connect} from 'react-redux'
import styled from 'styled-components'

// const Back = styled.div`
// // background-size: 100px 100px;
// background-color:red;
// background:cover;
// `



const Layout = ({children, loggedIn}) =>(
  <div>
     
      <Navbar loggedIn={loggedIn}/> 
      <div>
          {children}
      </div>
      
  </div>
)

const mapStateToProps = ({firebase}) =>({
  loggedIn: firebase.auth
})

export default connect(mapStateToProps)(Layout)