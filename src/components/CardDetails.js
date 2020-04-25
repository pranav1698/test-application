import React from 'react';

// Inputs for user to add card details

const CardDetails = () => (
	<div className="card-section">
		<fieldset className="card-group">
			<label htmlFor="cardName" className="card-label">Name</label>
			<input id="cardName" className="card-input" type="text" required/>
		</fieldset>

		<fieldset className="card-group">
			<label htmlFor="cardNumber" className="card-label">Card Number</label>
			<input id="cardNumber" className="card-input" type="text" required/>
		</fieldset>

		<fieldset className="card-group">
			<label htmlFor="expiryDate" className="card-label">Expiry Date</label>
			<input id="expiryDate" className="card-input" type="text" placeholder="MM/YYYY" required/>
		</fieldset>
	</div>
);

export default CardDetails;