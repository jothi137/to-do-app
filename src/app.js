import React, { Component } from 'react';
import List from './list';

export default class ToDoApp  extends Component {
	constructor(props) {
		super(props);
		this.todoItems = [];
		this.todoItems.push({index: 1, value: "learn react", done: false});
		this.todoItems.push({index: 2, value: "go shopping", done: true});
		this.todoItems.push({index: 3, value: "buy flowers", done: true});
		this.state = {
			todoItems: this.todoItems
		}
		this.removeItem = this.removeItem.bind(this);
		this.markItemDone = this.markItemDone.bind(this);
	}

	removeItem(index) {
		this.todoItems.splice(index, 1);
		this.setState({todoItems: this.todoItems});
	}

	markItemDone(index) {
		console.log('mark done');
		var todo = this.todoItems[index];
    	this.todoItems.splice(index, 1);
    	todo.done = !todo.done;
    	todo.done ? this.todoItems.push(todo) : this.todoItems.unshift(todo);
    	this.setState({todoItems: this.todoItems});	
	}

	render() {
		return (
			<List 
				items={this.state.todoItems}
				removeItem={this.removeItem}
				markItemDone={this.markItemDone}
			/>
		);	
	}
	
}
