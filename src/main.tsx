import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './app.scss'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
