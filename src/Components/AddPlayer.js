import React, { Component } from 'react'
import uuid from 'uuid'
import PropTypes from 'prop-types'

class AddPlayer extends Component {
	constructor() {
		super()
		this.state = {
			newPlayer: {}
		}
	}

	static defaultProps = {
		INT: 0,
		STR: 0,
		DEX: 0,
		LUK: 0
	}
	
	handleSubmit(e) {
		if(this.refs.name.value === '' 
		|| this.refs.int.value === ''
		|| this.refs.str.value === ''
		|| this.refs.dex.value === ''
		|| this.refs.luk.value === '')
			alert("One or more field(s) is/are blank.")
		else {
			this.setState({newPlayer: {
				id: uuid.v4(),
				name: this.refs.name.value,
				INT: this.refs.int.value,
				STR: this.refs.str.value,
				DEX: this.refs.dex.value,
				LUK: this.refs.luk.value
			}}, function() {
				this.props.addPlayer(this.state.newPlayer)
			})
		}
		e.preventDefault();		
	}

	render() {
		return (
			<div className='addPlayer'>
				<h3>Add Player</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<table>
							<tbody>
								<tr>
									<td>Name</td>
									<td>: <input type='text' ref='name' /></td>
								</tr>
								<tr>
									<td>INT</td>
									<td>: <input type='text' ref='int' /></td>
								</tr>
								<tr>
									<td>STR</td>
									<td>: <input type='text' ref='str' /></td>
								</tr>
								<tr>
									<td>DEX</td>
									<td>: <input type='text' ref='dex' /></td>
								</tr>
								<tr>
									<td>LUK</td>
									<td>: <input type='text' ref='luk' /></td>
								</tr>
							</tbody>
						</table>
					</div>
					<input type='submit' value='submit' />
				</form>
				<hr />
			</div>
		)
	}
}

AddPlayer.propTypes = {
	addPlayer: PropTypes.func
}

export default AddPlayer
