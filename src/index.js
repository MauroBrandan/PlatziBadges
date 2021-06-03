import React from 'react'
import ReactDom from 'react-dom'

import './global.css'
import BadgeNew from './pages/BadgeNew'

const container = document.getElementById('app')

ReactDom.render(<BadgeNew />, container)
