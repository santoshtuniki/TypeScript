import { Suspense, lazy } from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";
import Email from "./Email";

// Static import -> imported at the top of the page
// import ContactForm from "./ContactForm";

// Dynamic import -> can be imported anywhere in a page
const ContactForm = lazy(() => import('./ContactForm'));

type Props = {};

const Contact = ({ history, location, match }: Props & RouteComponentProps) => {
	return (
		<>
			<h1>Contact</h1>
			<hr />
			<div>
				Contact
				<address>
					#72 , Arthur's Lane, Rosewell, New York - 10001
				</address>
			</div>

			<div className="navigation-links">
				<NavLink to={`${match.url}/phone`} activeClassName="active">Phone</NavLink>
				<NavLink to={`${match.url}/email`} activeClassName="active">Email</NavLink>
				<NavLink to={`${match.url}/message`} activeClassName="active">Message</NavLink>
			</div>

			<Route path={`${match.path}/phone`} render={() => <div>+91-9123456789</div>} />
			<Route path={`${match.path}/email`} render={(props: RouteComponentProps) => <Email value="contactus@example.com" {...props} />} />

			{/* fallback --> To specify what should be displayed while it is loading.
				<Suspense> --> Lets you display a fallback until its children have finished loading.*/}
			<Suspense fallback={<div>Loading...</div>}>
				<Route path={`${match.path}/message`} render={(props: RouteComponentProps) => <ContactForm {...props} />} />
			</Suspense>

		</>
	);
};

export default Contact;