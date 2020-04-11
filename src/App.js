import React, { Component } from 'react';
import './components/styling/Custom.css';
import FrontLayout from './components/layout/FrontLayout';
import BackLayout from './components/layout/BackLayout';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switchMode: true,
			card: [
				{ front: 'test front', back: 'test back' },
				{ front: 'test front 1', back: 'test back 1' },
				{ front: 'test front 2', back: 'test back 2' }
			]
		};
	}

	switchMode = () => {
		this.setState({
			switchMode: !this.state.switchMode
		});
	};

	addCard = (front, back) => {
		this.setState(state => {
			const card = [...state.card, { front, back }];
			return {
				card: card
			};
		});
	};

	deleteMode = index => {
		this.setState(state => {
			const cards = [...state.card];
			cards.splice(index, 1);
			return {
				card: cards
			};
		});
	};

	render() {
		const { switchMode, card } = this.state;
		if (switchMode) {
			return (
				<div className='app-container front'>
					<FrontLayout
						switchMode={this.switchMode}
						card={card}
						addCard={this.addCard}
						deleteMode={this.deleteMode}
						length={card.length}
					/>
				</div>
			);
		}

		return (
			<div className='app-container back'>
				<BackLayout
					switchMode={this.switchMode}
					card={card}
					length={card.length}
				/>
			</div>
		);
	}
}

export default App;
