import React, {Component} from 'react';

export default class AddTaskForm extends Component {
	render() {
		return (
			<div className="card">
				<form>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Add a new item"/>
					</div>
					<button type="submit" className="btn btn-block btn-primary mt-3">Add</button>
				</form>
			</div>
		);
	}
}