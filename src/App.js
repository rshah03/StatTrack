import React, { Component } from 'react'
import './Styles/App.css'
import Player from './Components/Player'
import AddPlayer from './Components/AddPlayer'

class App extends Component {
	constructor() {
		super()
		this.state = {
			players: [],
		}
	}

	handleAddPlayer(player) {
		let players = this.state.players
		players.push(player)
		this.setState({players:players})

	}

	render() {
		return (
			<div className="App">
				<div className='addPlayer-form'>
					<AddPlayer addPlayer={this.handleAddPlayer.bind(this)}/>
				</div>
				<Player players={this.state.players} />
			</div>			
		)
	}
}

export default App
