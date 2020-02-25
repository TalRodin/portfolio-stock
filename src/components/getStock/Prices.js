import React from 'react'

const Prices =props=>(
   
        
            <div>
                {props.symbol && <p>Symbol:{props.symbol}</p>}
                {props.price && <p>Price:{props.price}</p>}
                {props.volume && <p>Volume:{props.volume}</p>}
                {props.error && <p>{props.error}</p>}
            </div>
    )
export default Prices