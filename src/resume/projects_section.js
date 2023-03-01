import React from 'react';

import './resume.css';
import ExternalLinkIcon from './icons/external_link.js';

export default function ProjectsSection() {
	return (
		<div className="section">
			<h2 className="section_heading">Projects</h2>
			<div className="sub_section">
				<div className="sub_section">
					<ul className="work_description">
						<li className="work_description_point">
							<a>
								Go to three.js examples
								<ExternalLinkIcon />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
