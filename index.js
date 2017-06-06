/**
 * Created by hujiong on 17-5-31.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './example/container/App'
import store from './example/store/configStore'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)


// render(
//     <ShowData/>,document.getElementById('app')
// )
