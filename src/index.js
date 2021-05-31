import React from 'react'
import { render } from 'react-dom'
import AppProvider from '@store/provider'
import './index.scss'

render(<AppProvider />, document.getElementById('app'))
