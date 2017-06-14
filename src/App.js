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

	handleIncrementInt() {
		console.log('method in app')
		this.setState({
			player: {
				...this.state.player,
				INT: this.state.players.props.player.INT + 1
			}
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
