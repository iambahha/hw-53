import React, {Component} from 'react';

export default class AddTaskForm extends Component {
	render() {
		const {item, handleChange, handleSubmmit} = this.props;
		return (
			<div className="card">
				<form onSubmit={handleSubmmit}>
					<div className="input-group">
						<input type="text" className="form-control"
									 placeholder="Add a new item" value={item} onChange={handleChange}/>
					</div>
					<button type="submit" className="btn btn-block btn-primary mt-3">Add</button>
				</form>
			</div>
		);
	}
}