import React from 'react'
import styled from 'styled-components';


const TextWrap = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    color: rgba(51,51,51,1);
    position:absolute;
    margin-top:10%;
`
const Line = styled.p`
    font-weight:bold;
`

class Prices extends React.Component{
      render(){
          let message=''
          if (this.props.cash && this.props.price){
            if (this.props.cash/this.props.price>=1){
              message=`You are able to buy ${Math.floor(this.props.cash/this.props.price)} stocks!`
            }else{
              message=`You have no enough cash!`
            }
          }
          console.log(this.props.cash/this.props.price )
          return(
            <TextWrap>
                {this.props.cash && <p>Cash available: ${this.props.cash.toFixed(2)}</p>}
                {this.props.symbol && <p>Symbol: {this.props.symbol}</p>}
                {this.props.price && <p>Price: {this.props.price}</p>}
                {this.props.volume && <p>Volume: {this.props.volume}</p>}
                {this.props.error && <p>{this.props.error}</p>}
                <Line>{message}</Line>
            </TextWrap>)
}}
export default Prices