import React, { Component } from 'react';
import '../styling/Custom.css';

class BackLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			isBack: false
		};
	}
	render() {
		const { index, isBack } = this.state;

		const displayFrontCard = this.props.card.map((item, i) => {
			if (index === i) {
				return <h3>{item.front}</h3>;
			}
			return null;
		});

		const displayBackCard = this.props.card.map((item, i) => {
			if (index === i) {
				return <h3>{item.back}</h3>;
			}
			return null;
		});

		if (!isBack) {
			return (
				<div className='layout-container card-container'>
					<h3>Try to say the answer aloud before you check it.</h3>
					<div className='quetion-card'>{displayFrontCard}</div>
					<div style={styles.containerBtn}>
						<div onClick={this.ChangeCard} style={styles.btnLayout}>
							<h4 className='layout-btn front'>Next Question</h4>
						</div>
						<div onClick={this.switchBtn} style={styles.btnLayout}>
							<h4 className='layout-btn front'>Check Answer</h4>
						</div>
					</div>
					<div onClick={this.props.switchMode}>
						<h4 className='layout-btn front'>Home</h4>
					</div>
				</div>
			);
		}
		return (
			<div className='layout-container card-container'>
				<h3>Compare your answer with this one, was it correct?!</h3>
				<div className='answer-card'>{displayBackCard}</div>
				<div style={styles.containerBtn}>
					<div onClick={this.ChangeCard} style={styles.btnLayout}>
						<h4 className='layout-btn back'>Next Answer</h4>
					</div>
					<div onClick={this.switchBtn} style={styles.btnLayout}>
						<h4 className='layout-btn back'>Check Quetion</h4>
					</div>
				</div>
			</div>
		);
	}
	switchBtn = () => {
		this.setState(state => ({
			isBack: !state.isBack
		}));
	};

	ChangeCard = () => {
		const { index } = this.state;
		const length = this.props.length;
		this.setState(state => {
			if (index < length && !index <= length) {
				return {
					index: state.index + 1
				};
			}
			return {
				index: 0
			};
		});
	};
}
const styles = {
	containerBtn: {
		display: 'flex',
		margin: 0,
		padding: 0
	},
	btnLayout: {
		margin: '0px 5px'
	}
};
export default BackLayout;
