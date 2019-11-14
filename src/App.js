import React, {Component} from 'react';
import AddTaskForm from "./Components/Task/AddTaskForm";
import Task from "./Components/Task/Task";
import uuid from "uuid"

class App extends Component {
	state = {
		items: [],
		id: 0,
		item: ''
	};
	handleChange = (e) => {
		this.setState({
			item: e.target.value
		})
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			id: this.state.id,
			item: this.state.item
		};

		this.setState({
			item: "",
			id: uuid(),
		})
	};
	handleDelete = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id);
		this.setState({
			items: filteredItems
		});
	};


	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md-auto mt-4">
							<h3 className="mainText">To Do List</h3>
							<AddTaskForm item={this.state.item} handleChange={this.handleChange}
							handleSubmit={this.handleChange}/>
							<Task/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
