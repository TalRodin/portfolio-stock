import React from 'react'
import styled from 'styled-components';

const SymbolWrap=styled.div`
@import url('https://fonts.googleapis.com/css?family=Lato');
font-size: 16px;
font-family: 'Lato', sans-serif;
color: #61677C;
`

const Symbol = ({symbol}) =>{
    
    

    return (
        <SymbolWrap>
          (BUY) {symbol.symbol} · {symbol.quantity} Shares @ {symbol.price}
        </SymbolWrap>
    )
}

export default Symbol