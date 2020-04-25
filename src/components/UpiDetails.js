import React from 'react';

// Page for user to add upi details

const UpiDetails = () => (
	<div>
		<fieldset className="card-group">
			<label htmlFor="upiId" className="card-label" type="email">Enter your UPI ID</label>
			<input id="upiId" className="card-input" type="text" required/>
		</fieldset>
	</div>
)

export default UpiDetails;