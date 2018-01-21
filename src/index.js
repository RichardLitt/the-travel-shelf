import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import App from './App'
import bookstoresReducer from './store/reducer/bookstores'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  bookstores: bookstoresReducer,
  form: formReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
