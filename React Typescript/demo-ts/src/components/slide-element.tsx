import React, { Fragment } from "react";
import "./slide.css";

import { bodyStyle, listUnstyled, headingFinalStyle } from "./slide.styles";

const Slide = () => {
	const slide = (
		<div className="slide">
			<h1 style={headingFinalStyle}>Styling in React</h1>
			<hr />
			<ul style={{ ...bodyStyle, ...listUnstyled }}>
				<li>You can style using CSS classes</li>
				<li>You can style using inline styling</li>
			</ul>
		</div>
	);

	return slide;
}

const el = (
	<Fragment>
		<Slide />
		<Slide />
	</Fragment>
)

export default el;