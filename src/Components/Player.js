import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PlayerItem from './PlayerItem'

class Player extends Component {

	incrementINT = () => {
        let { player } = this.state;
        player.int += 1;
        this.setState({ player })
    }

	render() {
		let playerItem
		if(this.props.players) {
			playerItem = this.props.players.map(player => {
				return (
					<PlayerItem key={player.name} player={player} incrementINT={this.incrementINT} />
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



