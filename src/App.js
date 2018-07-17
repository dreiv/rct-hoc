import React, { Component } from 'react'
import './App.css'
import { EnhancedExample } from './components/eventHandler/Example'

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
