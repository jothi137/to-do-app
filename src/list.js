import React, { Component } from 'react';
import ListItem from './listItem';

export default class List extends Component {
	render() {
		var items = this.props.items.map((item, index) => {
    return (
        <ListItem 
        		key={index} 
        		item={item} 
        		index={index}
            removeItem={this.props.removeItem}
            markItemDone={this.props.markItemDone}
  	    />
  	);
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
	
}

