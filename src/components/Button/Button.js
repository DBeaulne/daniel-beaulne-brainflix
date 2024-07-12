/** Button component */
import './Button.scss';
import React from 'react';
import { Link } from 'react-router-dom';

// this button component takes in props 'text', 'icon', 'to'
// 'to' prop is for routing
// 'text' prop takes in the text passed in and displays it inside the button
// 'icon' prop takes in the path to the icon asset folder to display the appropriate icon in the button
// ToDo: determine if we need to pass in a prop to handle button functionality like 'onSubmit' or 'onClick'

function Button({ text, icon, to }) {
	return (
		<Link to={to} className="button">
			<button className="button__btn" type="button" style={{ backgroundImage: `url(${icon})` }}>
				{text}
			</button>
		</Link>
	);
}
export default Button;
