import React from 'react';
import {GetDateTime} from '../../helper/DateHelper';

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
		 		<td>{ GetDateTime(key) }</td>
		  	</tr>
		);
		return (
			<div>
				<h3>History</h3>
				<table border="1">
					<tbody>
					<tr>
						<th>Item name</th>
						<th>Quantity</th>
						<th>Category</th>
						<th>Department</th>
						<th>Store</th>
						<th>Cost</th>
						<th>DateTime</th>
					</tr>
					{itemsDOM}
					</tbody>
				</table>
			</div>
		)
	}
}