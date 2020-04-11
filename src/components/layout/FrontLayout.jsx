import React, { Component } from 'react';
import '../styling/Custom.css';

class FrontLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			front: '',
			back: ''
		};
	}

	render() {
		const { front, back } = this.state;
		const length = this.props.length;
		let isDisplay;

		if (length !== 0) {
			isDisplay = 'card-table';
		} else {
			isDisplay = 'hide-table';
		}

		return (
			<div className='card-container'>
				<h3>{`Create a flash card, which you will need to write a quetion as well as the collect answer to the quetion, After that you can go the View Card.`}</h3>
				<div className='input-card'>
					<input
						onChange={this.handleOnCahnge}
						name='front'
						value={front}
						placeholder='Question :'
					/>

					<input
						onChange={this.handleOnCahnge}
						name='back'
						value={back}
						placeholder='Answer :'
					/>
					<button onClick={this.addCard}>ADD</button>
				</div>
				<div className={isDisplay}>
					<table>
						<tbody>
							<tr>
								<th>Question</th>
								<th>Answer</th>
								<th>Delete</th>
							</tr>
						</tbody>
						<tbody>
							{this.props.card.map((item, i) => (
								<tr key={i}>
									<td>{item.front}</td>
									<td>{item.back}</td>
									<td>
										<h4 className='table-btn' data-index={i} onClick={this.deleteCard}>
											Delete
										</h4>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div onClick={this.props.switchMode}>
					<h4 className = 'front-layout-btn'>
						View Card
					</h4>
				</div>
			</div>
		);
	}
	
	handleOnCahnge = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	addCard = () => {
		const { front, back } = this.state;
		this.props.addCard(front, back);
		this.setState({
			front: '',
			back: ''
		});
	};
	deleteCard = event => {
		this.props.deleteMode(event.target.dataset.index);
	};
}

export default FrontLayout;
