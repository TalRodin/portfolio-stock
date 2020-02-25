import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import Audit from './Audit'

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
        console.log('-----',content)
    return (<div>
         {`Portfolio total amount ${total}`}
        {content}
          </div>)
    }
    
}
const mapStateToProps=({firebase, firestore})=>({
    userId: firebase.auth.uid,
    symbols: firestore.data.todos,
    requesting:  firestore.status.requesting,
    requested: firestore.status.requested
})
const mapDispatchToProps = {

}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(props=>[`todos/${props.userId}`]),
    )(Portfolio)