import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewGoogleForm from "./pages/NewGoogleForm";
import FinalGoogleForm from "./pages/FinalGoogleForm";
import GoogleFormUser from "./pages/GoogleFormUser";
import GoogleFormReport from "./pages/GoogleFormReport";
import GoogleFormList from "./pages/GoogleFormList";

// import SignUp from "./pages/SignUp";

class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/form" component={NewGoogleForm} />
					{/* form/{uuid}형식으로  url을 만들 수 있음 */}
					<Route exact path="/form/:uuid" component={GoogleFormUser} />
					<Route path="/report" component={GoogleFormReport} />
					<Route path="/list" component={GoogleFormList} />
				</Switch>
			</Router>
		);
	}
}
export default Routes;
