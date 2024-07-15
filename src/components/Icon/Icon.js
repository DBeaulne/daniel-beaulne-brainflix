/* Icon component */
import './Icon.scss';
import React from 'react';

// Icon component takes in icon and id prop
// the icon prop is the path to the icon file to be used
// the id prop is the unique id of the comment

function Icon({ icon, id }) {
	return (
		<div className="icon">
			<img className="icon__image" id={id} src={icon} />
		</div>
	);
}
export default Icon;
