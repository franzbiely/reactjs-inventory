import React from 'react';

export default class RawAddForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name : '',
			qty: 1,
			cost : 0,
			store : 'save-more',
			department : 'kitchen',
			category : 'wet-goods',
		}

	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;

		this.setState({
	    	[name]: value
	    });
	}
	handleSubmit(event) {
	    event.preventDefault();
		this.addItemForm.reset();
		this.props.addItem(this.state);
	}

	render() {
		return (
			<form ref={(input) => this.addItemForm = input} onSubmit={this.handleSubmit}>
				<p>
					<label htmlFor="name">Item Name</label>
					<input name="name" type="text"  onChange={this.handleInputChange} value={this.state.name}/>
				</p>
				<p>
					<label htmlFor="qty">Quantity</label>
					<input name="qty" type="number"  onChange={this.handleInputChange} value={this.state.qty}/>
				</p>
				<p>
					<label htmlFor="cost">Cost</label>
					<input name="cost" type="number"  onChange={this.handleInputChange} value={this.state.cost}/>
				</p>
				<p>
					<label htmlFor="store">Store</label>
					<select name="store" onChange={this.handleInputChange} value={this.state.store}>
						<option value="save-more">Save More</option>
						<option value="choice">Choice</option>
						<option value="mintal-public-market">Mintal Public Market</option>
						<option value="gaisano-grand-toril">Gaisano Grand Toril</option>
						<option value="gaisano-mall-toril">Gaisano Mall Toril</option>
						<option value="astro">Astro</option>
					</select>
				</p>
				<p>
					<label htmlFor="department">Department</label>
					<select name="department" onChange={this.handleInputChange} value={this.state.department}>
						<option value="kitchen">Kitchen</option>
						<option value="dining">Dining</option>
					</select>
				</p>
				<p>
					<label htmlFor="category">Category</label>
					<select name="category" onChange={this.handleInputChange} value={this.state.category}>
						<option value="wet-goods">Wet Goods</option>
						<option value="fruits">Fruits</option>
						<option value="ice-cream">Ice Cream</option>
						<option value="grocery">Grocery</option>
					</select>
				</p>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}