import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"
import './global.css'

import BadgeNew from './pages/BadgeNew.jsx'
import Badges from './pages/Badges.jsx'

const container = document.getElementById('app')
// ReactDOM.render recibe un elemento, por eso se pasa el <componente/> como elemento
ReactDOM.render(<Badges/>,container);