import React, { Component } from 'react'
import './App.css'
import Player from './Components/Player'
import uuid from 'uuid'

class App extends Component {
	constructor() {
		super()
		this.state = {
			players: [],
		}
	}

	getInitialPlayers() {
		this.setState({players: [
			{
				id: uuid.v4(),
				name: 'Seed Player',
				INT: 0,
				STR: 0,
				DEX: 0,
				LUK: 0
			}
		]})
	}

	componentWillMount() {
		this.getInitialPlayers()
	}

	render() {
		return (
			<div className="App">
				<h3 id='hello'>Hello</h3>
				<Player players={this.state.players} />
			</div>			
		)
	}
}

export default App
