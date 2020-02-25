import React from 'react'
import Prices from '../components/getStock/Prices'
import Form from '../components/getStock/Form'
const API_KEY='FBEEVNPWBGZJJW72'

class Symbol extends React.Component{
    
        state={    
            price: 0,
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
        })
        
    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
    render(){
        console.log('+++++',this)
       
        return(
        <div>
           
            {this.props.symbol.symbol} -- {this.props.symbol.quantity}@{this.state.price*this.props.symbol.quantity}

        </div>
        )
    }
}


export default Symbol