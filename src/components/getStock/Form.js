import React from 'react'

const Form = props =>(
    <form onSubmit={props.getPrice}>
    <input type="text" name="symbol" placeholder='Symbol...'/>
    <button>Get price</button>
    </form>
)
export default Form