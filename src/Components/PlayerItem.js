import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PlayerItem extends Component {
	render() {
		return (
			<div className='Player'>
				<strong>Name:</strong> {this.props.player.name} <br/>
				<ul>
					<strong>INT:</strong> {this.props.player.INT} <br/>
					<strong>STR:</strong> {this.props.player.STR} <br/>
					<strong>DEX:</strong> {this.props.player.DEX} <br/>
					<strong>LUK:</strong> {this.props.player.LUK} <br/>
				</ul>
			</div>
		)
	}
}

PlayerItem.propTypes = {
	player: PropTypes.object
}

export default PlayerItem