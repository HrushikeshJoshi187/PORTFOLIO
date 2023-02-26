import React from 'react';

import './section_heading.css';

export default function SectionHeading(props) {
	return (
		<div id="section_heading" className="section_heading">
			<h2 id="section_heading_text" className="section_heading_text">
				{props.heading_text}
			</h2>
			<p id="section_heading_description" className="section_heading_description">
				{props.heading_description}
			</p>
		</div>
	);
}
