import React from 'react'

const Symbol = ({symbol}) =>{
    return (
        <div>
            {symbol.symbol} -- {symbol.quantity}@{symbol.price}

        </div>
    )
}

export default Symbol