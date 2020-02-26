import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './layout/Layout'
import Portfolio from './containers/Portfolio'
import Transactions from './containers/Transactions'
import Login from './containers/Auth/Login'
import SignUp from './containers/Auth/SignUp'
import {connect} from 'react-redux'
import Logout from './containers/Auth/Logout'
import VerifyEmail from './containers/Auth/VerifyEmail'
import styled, { keyframes } from 'styled-components'
const fadeInOne = keyframes`
  from {
    transform :rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`

const BackgroundOne = styled.div`
    position: fixed;
    width: 650px;
    height: 500px;
    top: 40%;
    right:-10px;
    border:solid thin #f49e9f;
    border-radius: 30% 70% 70% 30% / 30% 69% 31% 70%;
    animation: 40s ${fadeInOne} ease;
`
const fadeInTwo = keyframes`
  from {
    transform :rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`

const BackgroundTwo = styled.div`
    position: fixed;
    width: 400px;
    height: 300px;
    top: 55%;
    left:40px;
    border:solid thin #f49e9f;
    border-radius: 60% 35% 60% 38% / 33% 23% 77% 67% ;
    animation: 60s ${fadeInTwo} ease;
`
const fadeInThree = keyframes`
  from {
    transform :rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`
const BackgroundThree = styled.div`
    position: fixed;
    width: 300px;
    height: 500px;
    top: 0%;
    left:20%;
    border:solid thin #f49e9f;
    border-radius: 60% 35% 60% 38% / 33% 23% 77% 67% ;
    animation: 80s ${fadeInThree} infinite linear;
`

//Routes 


const App = ({loggedIn,emailVerified}) => {
    let routes;
    if (loggedIn && !emailVerified){
        routes=(
            <Switch>
                <Route exact path='/verify-email' component={VerifyEmail}></Route>
                <Route exact path='/logout' component={Logout}></Route>
                <Redirect to='/verify-email'/>
            </Switch>
        )
    }
    else if (loggedIn && emailVerified){
        routes=(
            <Switch>
                <Route exact path='/' component={Transactions}></Route>
                <Route exact path='/portfolio' component={Portfolio}></Route>
                <Route exact path='/logout' component={Logout}></Route>
                <Redirect to='/'/>
            </Switch>
        )
    }
    else{
        routes=(
        <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Redirect to='/login'/>
        </Switch>
        )
    }
    return (
    <Layout>
        <BackgroundOne></BackgroundOne>
        <BackgroundTwo></BackgroundTwo>
        <BackgroundThree></BackgroundThree>
            {routes}
        
    </Layout>)
}

const mapStateToProps=({firebase})=>({
    loggedIn: firebase.auth.uid,
    emailVerified: firebase.auth.emailVerified
})


export default connect(mapStateToProps)(App);