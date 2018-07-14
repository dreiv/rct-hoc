import React, { Component } from 'react'
import './App.css'
import { EnhancedExample } from './components/inheritanceInversion/ii'

class App extends Component {
	render() {
		return (
			<div className="App">
				<EnhancedExample loggedIn />
			</div>
		)
	}
}

export default App
