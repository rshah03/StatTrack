import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PlayerItem from './PlayerItem'

class Player extends Component {
	render() {
		let playerItem
		if(this.props.players) {
			playerItem = this.props.players.map(player => {
				return (
					<PlayerItem key={player.name} player={player} />
				)
			})
		}
		return (
			<div>
				{playerItem}
			</div>
		)
	}
}

Player.propTypes = {
	players: PropTypes.array
}

export default Player



