import React from 'react'
import Prices from '../components/getStock/Prices'
import Form from '../components/getStock/Form'
import styled from 'styled-components';
const TextWrap = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lato');
color: #61677C;
font-size: 16px;
font-family: 'Lato', sans-serif;
`
const SumWrap = styled.div`

float:right;
`
const ConditColor=styled.div`
    color: ${props => ((props.price>props.openPrice) ? "green" :(props.price<props.openPrice) ? "red": '#61677C')}
`

const API_KEY='FBEEVNPWBGZJJW72'

class Symbol extends React.Component{
    
        state={    
            price: 0,
            openPrice:0,
        }
    
    componentDidMount() {
        this.getPrice();
        this.interval = setInterval(() => {
          this.getPrice();
        }, 1000 * 60 * 60 * 24);
      }
      
    getPrice=async()=>{
        const symbol = this.props.symbol.symbol
        const api_call = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
        const data = await api_call.json()

        console.log('data',data)
        this.setState({
            price: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['4. close'],
            openPrice: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['1. open'],
        })
        
    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
    render(){
        console.log('+++++',this)
       
        return(
        < TextWrap>
           
           <ConditColor price={this.state.price} openPrice={this.state.openPrice} >{this.props.symbol.symbol}</ConditColor>  · {this.props.symbol.quantity} Shares <SumWrap>${this.state.price*this.props.symbol.quantity}USD</SumWrap>

        </ TextWrap>
        )
    }
}


export default Symbol