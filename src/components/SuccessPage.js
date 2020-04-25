import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => (
	<div className="success">
		<h1>SuccessFull</h1>
		<Link to="/">
			<button className="btn">Return</button>
		</Link>	
	</div>
);

export default SuccessPage;