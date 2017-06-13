import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../Styles/PlayerItem.css'

let count = 0

class PlayerItem extends Component {
	handleIntIncrease() {
		console.log(this.props.player.INT)
		var increasedINT = this.state.player.INT + 1
		this.setState({INT: increasedINT})
	}

	render() {
		return (
			<div className='Player'>
				<table>
					<tbody>
						<tr>
							<td><strong>Name </strong></td>
							<td>: {this.props.player.name}</td>
						</tr>
						<tr>
							<td><strong>INT </strong></td>
							<td>: {this.props.player.INT}</td>
							<td><button onClick={() => this.handleIntIncrease()}>+</button></td>
						</tr>
						<tr>
							<td><strong>STR </strong></td>
							<td>: {this.props.player.STR}</td>
						</tr>
						<tr>
							<td><strong>DEX </strong></td>
							<td>: {this.props.player.DEX}</td>
						</tr>
						<tr>
							<td><strong>LUK</strong></td>
							<td>: {this.props.player.LUK}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

PlayerItem.propTypes = {
	player: PropTypes.object
}

export default PlayerItem