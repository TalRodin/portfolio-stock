import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import Audit from './Audit'
import styled from 'styled-components';
const Title=styled.div`
@import url('https://fonts.googleapis.com/css?family=Lato');
text-transform: uppercase;

font-family: 'Lato', sans-serif;
display:center;
text-align: center;
padding-bottom: 10%;
color: #61677C;
`
const Wrap=styled.div`

    width: 90%;
    // border: 1px solid red;
    margin:auto;
    // height: 900px;
    top:20%;
    left:5%;
    
    position:absolute;


`


const WrapperTwo=styled.div`
// float:center;
width: 40%;
height: 500px;
margin-left: 8%;
border-radius: 4px;
//   width:40%;
                    // height:auto;
                    // position: absolute;
                 
                    // margin-top:50px;
                    // margin-bottom:50px;
                    // border-radius:1rem;
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
            console.log(new_object)
            let arr=[]
            Object.keys(new_object).forEach(function(v){
                let obj={}
                obj['symbol']=v
                obj['quantity']=new_object[v]
                console.log(obj)
                arr.push(obj)
            })
            console.log(arr)



            content = arr.map((symbol, i)=><Audit key={i} symbol={symbol} ></Audit>)
            
        }
        let total=5000
    return (
        <Wrap>
            <WrapperTwo>
                <Title>
                    {`Cash account balance: $${total} USD`}
                </Title>
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