const headingStyle = {
	fontSize: "4em"
};

const bodyStyle = {
	fontSize: "2.5em"
};

const textCenter = {
	textAlign: "center" as const
};

const listUnstyled = {
	listStyleType: "none",
	padding: 0,
	margin: 0
};

const headingFinalStyle = {
	...headingStyle,
	...textCenter
};

export {
	bodyStyle, listUnstyled, headingFinalStyle
}