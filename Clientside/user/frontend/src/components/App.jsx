import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/nav/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./private/PrivateRoute";

import Editor from "../pages/Editor.dashboard";
import Researcher from "../pages/Researcher";
import Attendee from "../pages/Attendee";
import Presenter from "../pages/Presenter";
import Download from "../pages/Download";
import Workshop from "../pages/Workshop";

import Publication from "../pages/Publication";
import EventForm from "./common/EventForm";
const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<PrivateRoute exact path="/workshops">
					<Workshop />
				</PrivateRoute>
				<PrivateRoute exact path="/publications">
					<Publication />
				</PrivateRoute>
				<Route exact path="/downloads">
					<Download />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<PrivateRoute exact path="/blogs">
					<About />
				</PrivateRoute>
				<Route exact path="/auth/register">
					<Register />
				</Route>
				<Route exact path="/auth/login">
					<Login />
				</Route>
				
				<PrivateRoute exact path="/auth/user/editor/dashboard">
					<Editor />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/user/researcher/dashboard">
					<Researcher />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/user/presenter/dashboard">
					<Presenter />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/user/attendee/dashboard">
					<Attendee />
				</PrivateRoute>
				<PrivateRoute exact path="/workshop/create">
					<EventForm title="Workshop" />
				</PrivateRoute>
				<PrivateRoute exact path="/publication/create">
					<EventForm title="Publication" />
				</PrivateRoute>
				
			</Switch>
		</Router>
	);
};

export default App;
