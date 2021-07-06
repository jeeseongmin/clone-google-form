import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import GoogleForm from "./pages/FinalGoogleForm";
import GoogleFormUser from "./pages/GoogleFormUser";
import GoogleFormReport from "./pages/GoogleFormReport";

// import SignUp from "./pages/SignUp";

class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/form" component={GoogleForm} />
					{/* form/{uuid}형식으로  url을 만들 수 있음 */}
					<Route path="/form/:uid" component={GoogleFormUser} />
					<Route path="/report" component={GoogleFormReport} />
				</Switch>
			</Router>
		);
	}
}
export default Routes;
