import React, { Component } from 'react'
import './Styles/App.css'
import Player from './Components/Player'
import AddPlayer from './Components/AddPlayer'

class App extends Component {
	constructor(props) {
		super()
		this.state = {
			players: [],
			player: {}
		}
	}


	handleAddPlayer(player) {
		let players = this.state.players
		players.push(player)
		this.setState({players:players})

	}

	handleIncrementInt(player) {
		console.log(player)
		this.setState({
			player: {
				// ...this.state.player,
				INT: player.INT + 1
			}
		})
	}

	updatePlayer(index, player) {
		this.state.players.find(this.state.player.name)
		this.setState({
			INT: this.state.player.INT + 1
		})
	}


	render() {
		return (
			<div className="App">
				<div className='addPlayer-form'>
					<AddPlayer addPlayer={this.handleAddPlayer.bind(this)}/>
				</div>
				<Player players={this.state.players} incrementInt={this.handleIncrementInt.bind(this)} />
			</div>			
		)
	}
}

export default App
