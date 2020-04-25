import React from 'react';

const AddressPage = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.history.push('/payment');
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Shipping Address</h2>
				<fieldset className="form-group">
					<label htmlFor="userName">Full Name</label>
					<input id="userName" className="form-input" type="text" required/>
				</fieldset>
				
				<fieldset className="form-group">
					<label htmlFor="streetAddress">Street Address</label>
					<input id="streetAddress" className="form-input" type="text" required/>
				</fieldset>
				
				<div className="form-section">
					<fieldset className="form-group">
						<label htmlFor="city">City</label>
						<input id="city" className="form-input" type="text" required/>
					</fieldset>
					
					<fieldset className="form-group">
						<label htmlFor="state">State</label>
						<input id="state" className="form-input" type="text" required/>
					</fieldset>	
				</div>
				
				<fieldset className="form-group">
					<label htmlFor="country">Country</label>
					<input id="state" className="form-input" type="text" required/>
				</fieldset>
				
				<fieldset className="form-group">
					<label htmlFor="pincode">Pincode</label>
					<input id="pincode" className="form-input" type="text" required/>
				</fieldset>
				
				<div className="submit-section">
					<input className="btn" type="Submit"/>
				</div>	
			</form>
		</div>
	);
};

export default AddressPage;