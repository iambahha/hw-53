import React, { Component } from "react";

export default class TodoInput extends Component {
	render() {
		const { item, handleChange, handleSubmit} = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={handleSubmit}>
					<div className="input-group">

						<input
							type="text"
							className="form-control text-capitalize"
							placeholder="add a todo item"
							value={item}
							onChange={handleChange}
						/>
					</div>
					<button
						type="submit"
						className={"btn btn-block btn-primary mt-3"
						}
					>ADD ITEM
					</button>
				</form>
			</div>
		);
	}
}