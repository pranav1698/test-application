import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddressPage from '../components/AddressPage';
import PaymentPage from '../components/PaymentPage';
import SuccessPage from '../components/SuccessPage';
import "../App.css";

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact={true} component={AddressPage}/>
			<Route path="/payment" component={PaymentPage} />
			<Route path="/success" component={SuccessPage}/>
		</Switch>
	</BrowserRouter>

);

export default AppRouter;