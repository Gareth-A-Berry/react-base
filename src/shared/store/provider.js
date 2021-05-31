import React from 'react'
import { Provider } from 'react-redux'
import store from '@store/index'
import App from '@src/app'

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
