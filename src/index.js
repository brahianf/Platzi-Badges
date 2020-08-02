import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"
import './global.css'

import App from './components/App.jsx';

const container = document.getElementById('app')
// ReactDOM.render recibe un elemento, por eso se pasa el <componente/> como elemento
ReactDOM.render(<App/>,container);