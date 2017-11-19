import React from 'react';
import RawAddForm from './RawAddForm';
import RawList from './RawList';
import RawHistory from './RawHistory';

export default class Raw extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			histories : [],
			items : []
		}

		this.addItem = this.addItem.bind(this);
	}
	addHistory(item) {
		const histories = {...this.state.histories};
		const timestamp = Date.now();
		histories[`history-${timestamp}`] = item;
		this.setState({ histories });
	}
	addItem(item) {

		this.addHistory(item);
		const items = {...this.state.items};
		const timestamp = Date.now();


		// check if exists in items
		const items_keys = Object.keys(items);
		const key_of_item_in_items = items_keys.map((_item) => items[_item].name ).indexOf(item.name);
		if( key_of_item_in_items > -1) {
			// Update number
			items[ items_keys[key_of_item_in_items] ].qty += parseInt(item.qty);
		}
		else {
			// Add to items
			items[`raw-${timestamp}`] = item;
		}
		this.setState({ items });
	}
	render() {

		return (
			<div className="component">
				<h3>Raw Materials</h3>
				<RawAddForm addItem={this.addItem} />
				<hr />
				<RawHistory histories={this.state.histories} /> <br />
				<RawList items={this.state.items} />
			</div>
		)
				
	}
}