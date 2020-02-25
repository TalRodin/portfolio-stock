import React from 'react'
import Navbar from '../components/Navbar'
import {connect} from 'react-redux'
import styled from 'styled-components';

const Wrapper = styled.div`
      @import url('https://fonts.googleapis.com/css?family=Lato');
      background-position: 0 0, 50px 50px;
      background-size: 100px 100px;
      color:#424242;
      height: 710px;
      width: 100%;
      background-color: #f7f7f7;
      font-family: 'Lato', sans-serif;
      background-image: radial-gradient(#b8b5b8 2%, transparent 2%),
      radial-gradient(#b8b5b8 2%, transparent 2%);
`;


const Layout = ({children, loggedIn}) =>(
    <Wrapper>
    
      <Navbar loggedIn={loggedIn}/> 
      <div>
          {children}
      </div>
     
    </Wrapper>
)

const mapStateToProps = ({firebase}) =>({
  loggedIn: firebase.auth
})

export default connect(mapStateToProps)(Layout)