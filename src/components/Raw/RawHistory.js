import React from 'react';

export default class RawHistory extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		const items = this.props.histories;

		const itemsDOM = Object.keys(items).map((key) =>
			<tr key={key}>
		  		<td>{items[key].name}</td>
		  		<td>{items[key].qty}</td>
		 		<td>{items[key].category}</td>
		 		<td>{items[key].department}</td>
		 		<td>{items[key].store}</td>
		 		<td>{items[key].cost}</td>
		  	</tr>
		);
		return (
			<table border="1">
				<thead>
					<h3>History</h3>
				</thead>
				<tbody>
				<tr>
					<th>Item name</th>
					<th>Quantity</th>
					<th>Category</th>
					<th>Department</th>
					<th>Store</th>
					<th>Cost</th>
				</tr>
				{itemsDOM}
				</tbody>
			</table>
		)
	}
}