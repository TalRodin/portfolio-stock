import React from 'react'

const Message=({children, error, success}) =>{
    return(
        <p error={error} success={success}>
            {children}
        </p>
    )
}
export default Message