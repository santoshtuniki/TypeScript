import React from "react";
import ReactDOM from "react-dom";

const el = (
	<div title="Welcome to React">
		<h1>Introduction to React!</h1>
		<p id="introduction">
			<span className="text-bold">React</span>
			&nbsp;is a JS libraray for building the UI
		</p>
	</div>
);

ReactDOM.render(el, document.getElementById("root"));