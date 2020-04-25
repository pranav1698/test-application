import React from 'react';
import { Link } from 'react-router-dom';
import CardDetails from './CardDetails';
import UpiDetails from './UpiDetails';
// Page used to select payment options

class PaymentPage extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			selectDebit: false,
			selectCredit: false,
			selectUPI: false
		};
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.history.push('/success');
	}
	handleClick(e) {
		if(e.target.value === "debit"){
			this.setState((prevState) => ({selectDebit: !prevState.selectDebit}));
			if(this.state.selectCredit) {
				this.setState((prevState) => ({selectCredit: !prevState.selectCredit}));
			}
			if(this.state.selectUPI) {
				this.setState((prevState) => ({selectUPI: !prevState.selectUPI}));
			}
		} else if (e.target.value === "credit") {
			this.setState((prevState) => ({selectCredit: !prevState.selectCredit}));
			if(this.state.selectDebit) {
				this.setState((prevState) => ({selectDebit: !prevState.selectDebit}));
			}
			if(this.state.selectUPI) {
				this.setState((prevState) => ({selectUPI: !prevState.selectUPI}));
			}	
		} else {
			this.setState((prevState) => ({selectUPI: !prevState.selectUPI}))
			if(this.state.selectDebit) {
				this.setState((prevState) => ({selectDebit: !prevState.selectDebit}));
			}
			if(this.state.selectCredit) {
				this.setState((prevState) => ({selectCredit: !prevState.selectCredit}));
			}
		}

	}
	
	render () {
		return (
				<div className="react-form">
					<form onSubmit={this.handleSubmit}>
						<h2>Payment</h2>

							<label className="payment-label">
								<input type="radio" name="payment-option" onClick={this.handleClick} value="debit" className="radio-input"/>
								<span className="payment-option">Debit Card</span>
								<span className="selected"></span>
								{this.state.selectDebit && (
									<CardDetails />
								)}
							</label>

							<label className="payment-label">
									<input type="radio" name="payment-option" className="radio-input" value="credit" onClick={this.handleClick}/>
									<span className="payment-option">Credit Card</span>
									{this.state.selectCredit  && (
										<CardDetails />
									)}
									<span className="selected"></span>
							</label>

							<label className="payment-label">
								<input type="radio" name="payment-option" className="radio-input" onClick={this.handleClick}/>
								<span className="payment-option">UPI</span>
								{this.state.selectUPI && (
									<UpiDetails />
								)}
								<span className="selected"></span>
							</label>

							<label className="payment-label">
								<input type="radio" name="payment-option" disabled className="radio-input" />
								<span className="payment-option">Cash On Delivery</span>
								<span className="selected"></span>
							</label>

							<div className="form-section">
								<Link to="/">
									<button className="btn">Back</button>
								</Link>
								<input type="submit" className="btn paymnt-btn"/>
							</div>
					</form>
				</div>
			);
	}
}

// const PaymentPage = (props) => {
// 	const handleSubmit = (e) => {
// 		// 	};

// 	const handleSelect = (e) => {
// 		console.log(e);
// 	}

// 	return (
// 		<div className="react-form">
// 			<form onSubmit={handleSubmit}>
// 				<h2>Payment</h2>

// 					<label className="payment-label">
// 						<input type="radio" name="payment-option" onClick={handleSelect}/>
// 						<span className="payment-option">Debit Card</span>
// 						<span className="selected"></span>
// 					</label>

// 					<label className="payment-label">
// 							<input type="radio" name="payment-option" />
// 							<span className="payment-option">Credit Card</span>
// 							<span className="selected"></span>
// 					</label>

// 					<label className="payment-label">
// 						<input type="radio" name="payment-option"/>
// 						<span className="payment-option">UPI</span>
// 						<span className="selected"></span>
// 					</label>

// 					<label className="payment-label">
// 						<input type="radio" name="payment-option" disabled/>
// 						<span className="payment-option">Cash On Delivery</span>
// 						<span className="selected"></span>
// 					</label>

// 					<div className="form-section">
// 						<Link to="/">
// 							<button className="btn">Back</button>
// 						</Link>
// 						<input type="submit" className="btn paymnt-btn"/>
// 					</div>
// 			</form>
// 		</div>
// 	);
// };

export default PaymentPage;