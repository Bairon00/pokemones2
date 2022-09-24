import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Inicio } from "./views/Inicio";
import { Pokemones } from "./views/pokemones";
import { EspeciesDetalle } from "./views/EspeciesDetalle";
import { Especies } from "./views/Especies";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Inicio />
						</Route>
						<Route exact path="/Pokemones">
							<Pokemones />
						</Route>
						<Route exact path="/Especies">
							<Especies />
						</Route>
						<Route exact path="/Especies/:name">
							<EspeciesDetalle />
						</Route>
						<Route>
							<h1>Esta ruta no la conocemos</h1>
						</Route>
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
