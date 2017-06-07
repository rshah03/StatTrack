import React, { Component } from 'react'
import './App.css'
import Player from './Components/Player'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h3 id='hello'>Hello</h3>
				<Player />
			</div>			
		)
	}
}

export default App
