import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import Audit from './Audit'
import styled from 'styled-components';

const Title=styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    text-align: center;

    color: rgba(51,51,51,1)
`
const T=styled.h5`
    @import url('https://fonts.googleapis.com/css?family=Lato');


    font-family: 'Lato', sans-serif;
    text-align: center;
    padding-bottom: 10%;
    color: rgba(51,51,51,1)
`
const Wrap=styled.div`
    position:center;
    width: 50%;
    top:20%;
    left:20%;
    position:absolute;
`


const WrapperTwo=styled.div`
    height: 500px;
    margin-left: 10%;
    border-radius: 4px;
    background-color: #f7f7f7;
    padding: 30px;
    box-shadow:
        -2.3px -2.3px 3.8px rgba(255,255,255, 0.2),
        -6.3px -6.3px 10.6px rgba(255,255,255, 0.3),
        -15.1px -15.1px 25.6px rgba(255,255,255, 0.4),
        -50px -50px 85px rgba(255,255,255, 0.07),
        2.3px 2.3px 3.8px rgba(0, 0, 0, 0.024),
        6.3px 6.3px 10.6px rgba(0, 0, 0, 0.035),
        15.1px 15.1px 25.6px rgba(0, 0, 0, 0.046),
        50px 50px 85px rgba(0, 0, 0, 0.07);
`
class Portfolio extends React.Component{
    render(){
        let content;
        if(!this.props.symbols){
            content = <p>Loading...</p>
        }
        else if (!this.props.symbols[this.props.userId] && this.props.requested[`todos/${this.props.userId}`]){
            content = <p>No bought stocks yet</p>
        }
        else{
            let new_object={}
            this.props.symbols[this.props.userId].todos.forEach(function(v){
                if(v.symbol in new_object){
                    new_object[v.symbol]+=v.quantity
                }
                else{
                    new_object[v.symbol]=v.quantity
                } 
            })
            let priceObject={}
            this.props.symbols[this.props.userId].todos.forEach(function(v){
                if(v.symbol in priceObject){
                    priceObject[v.symbol]+=(v.quantity*v.price)
                }
                else{
                    priceObject[v.symbol]=(v.quantity*v.price)
                }
            })
            let n=[]
            Object.keys(new_object).forEach(function(v){
                let obj={}
                if (Object.keys(priceObject).includes(v)){
                    obj['symbol']=v
                    obj['quantity']=new_object[v]
                    obj['price']=priceObject[v]
                }
                n.push(obj)
            })
         
            content = n.map((symbol, i)=><Audit key={i} symbol={symbol} ></Audit>
            )
        }
    return (
        <Wrap>
            <WrapperTwo>
                <Title>
                    {`Portfolio`}
                </Title>
                <T>Cash available initially: $5000 USD</T>
                {content}
            </WrapperTwo>
        </Wrap>
        )
    }
}
const mapStateToProps=({firebase, firestore})=>({
    userId: firebase.auth.uid,
    symbols: firestore.data.todos,
    requesting:  firestore.status.requesting,
    requested: firestore.status.requested
})
const mapDispatchToProps = {}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(props=>[`todos/${props.userId}`]),
    )(Portfolio)