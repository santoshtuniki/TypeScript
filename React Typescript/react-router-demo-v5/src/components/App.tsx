import { Switch, Route } from "react-router-dom";

import NavigationMenu from "./NavigatorMenu";
import Home from "./Home";
import Contact from "./Contact";

import "./app.css";

const App = () => {
	return (
		<>
			<NavigationMenu />

			{/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</>
	);
};

export default App;
