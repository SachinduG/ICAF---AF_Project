import React from "react";
import ReactDOM from "react-dom";

import App from "./src/components/App";
import RegisterFormContext from "./src/context/RegisterFormContext";

ReactDOM.render(
	<RegisterFormContext>
		<App />
	</RegisterFormContext>,
	document.getElementById("root")
);
