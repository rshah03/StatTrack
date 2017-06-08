import React, { Component } from 'react'
import './Styles/App.css'
import Player from './Components/Player'
import AddPlayer from './Components/AddPlayer'
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

	handleAddPlayer(player) {
		let players = this.state.players
		players.push(player)
		this.setState({players:players})

	}

	render() {
		return (
			<div className="App">
				<h3 id='hello'>Hello</h3>
				<AddPlayer addPlayer={this.handleAddPlayer.bind(this)}/>
				<Player players={this.state.players} />
			</div>			
		)
	}
}

export default App
