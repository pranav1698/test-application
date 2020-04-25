import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.history.push('/success');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Payment</h2>

					<label className="payment-label">
						<input type="checkbox" />
						<span className="payment-option">Debit Card</span>
						<span className="selected"></span>
					</label>

					<label className="payment-label">
							<input type="checkbox"/>
							<span className="payment-option">Credit Card</span>
							<span className="selected"></span>
					</label>

					<label className="payment-label">
						<input type="checkbox"/>
						<span className="payment-option">UPI</span>
						<span className="selected"></span>
					</label>

					<label className="payment-label">
						<input type="checkbox" disabled/>
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
};

export default PaymentPage;