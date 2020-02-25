import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import store from './store'
import GlobalStyles from './utils/global';


const root = document.getElementById('root')


ReactDOM.render(<div>Loading...</div>,root)


store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
            <>
                <App />
                <GlobalStyles/>
            </>
            </BrowserRouter>
        </Provider>, document.getElementById('root'))
})


