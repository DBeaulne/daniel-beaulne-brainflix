/* Avatar component */
import './Avatar.scss';
import React from 'react';

// this component takes in props for image path and id
// passing in empty props will display an empty image field which will be colored by the css, as required by customer
// Do not pass in or add alt text to <img> tag as it will break the customer requirements

function Avatar(props) {
	return (
		<div className="avatar" id={props.id}>
			<img className="avatar__img avatar-img" src={props.image} />
		</div>
	);
}
export default Avatar;
