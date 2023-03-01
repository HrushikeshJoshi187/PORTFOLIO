import React from 'react';

import './resume.css';

export default function SkillsSection() {
	return (
		<div className="section">
			<h2 className="section_heading">Skills</h2>

			<div className="sub_section">
				<h3 className="sub_section_heading sub_section_heading_double_line">Programming Languages</h3>
				<hr className="horizontal_rule" />
				<div className="text">HTML, CSS, JavaScript</div>
			</div>

			<div className="sub_section">
				<h3 className="sub_section_heading sub_section_heading_double_line">Libraries and Frameworks</h3>
				<hr className="horizontal_rule" />
				<div className="text">React.js, Three.js, Cannon.js, Playwright, React Testing Library, Jest, Bootstrap</div>
			</div>

			<div className="sub_section">
				<h3 className="sub_section_heading sub_section_heading_double_line">Tools and Platforms</h3>
				<hr className="horizontal_rule" />
				<div className="text">Visual Studio Code, Github Desktop, Webpack, Netlify, Wordpress</div>
			</div>
		</div>
	);
}
