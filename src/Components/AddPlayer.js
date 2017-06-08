import React, { Component } from 'react'
import uuid from 'uuid'
import { Button } from 'react-bootstrap'

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
	


	render() {
		return (
			<div className='addPlayer'>
				<h3>Add Player</h3>
				<form onSubmit={console.log('Test')}>
					<div>
						<table>
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
						</table>
					</div>
					<input type='submit' value='submit' />
				</form>
				<hr />
			</div>
		)
	}
}

export default AddPlayer
