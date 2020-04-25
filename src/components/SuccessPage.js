import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => (
	<div className="success">
		<h1>SuccessFull</h1>
		<h2>Details Added</h2>
		<Link to="/">
			<button className="btn success-btn">Return</button>
		</Link>	
	</div>
);

export default SuccessPage;