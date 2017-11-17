import React from 'react';

export default class RawList extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		const items = this.props.items;

		const itemsDOM = Object.keys(items).map((key) =>
			<tr key={key}>
		  		<td>{items[key].name}</td>
		  		<td>{items[key].qty}</td>
		 		<td>{items[key].category}</td>
		 		<td>{items[key].department}</td>
		 		<td>{items[key].store}</td>
		  	</tr>
		);
		return (
			<table border="1">
				<thead>
					<h3>Raw Inventory</h3>
				</thead>
				<tbody>
				<tr>
					<th>Item name</th>
					<th>Quantity</th>
					<th>Category</th>
					<th>Department</th>
					<th>Store</th>
				</tr>
				{itemsDOM}
				</tbody>
			</table>
		)
	}
}