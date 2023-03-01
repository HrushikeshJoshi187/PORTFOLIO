import React from 'react';

import './resume.css';

import TimeIcon from './icons/time_icon.js';
import LocationIcon from './icons/location_icon.js';

export default function ExperienceSection() {
	return (
		<div className="section">
			<h2 className="section_heading">Experience</h2>
			<div className="sub_section">
				<h3 className="sub_section_heading">
					<div className="inline_flex">
						<div className="inline_flex_item">Software Engineer</div>
						<div className="inline_flex_item info_big">&#160;@ Persistent Systems</div>
					</div>
				</h3>

				<div className="inline_flex">
					<div className="inline_flex_item">
						<TimeIcon />
						<span className="info">December 2021 - Present</span>
					</div>

					<div className="inline_flex_item">
						<LocationIcon />
						<span className="info">Pune, Maharashtra</span>
					</div>
				</div>

				<ul className="work_description">
					<li className="work_description_point">
						Worked with the Qlik Visualization team and Developed a Date Picker component which supported custom date selection, date formatting and
						localization.
					</li>
					<li className="work_description_point">
						Led a team and developed automatic UI tests for Date Picker and other components that our team developed
					</li>
				</ul>
			</div>

			<div className="sub_section">
				<h3 className="sub_section_heading">
					<div className="inline_flex">
						<div className="inline_flex_item">Intern</div>
						<div className="inline_flex_item info_big">&#160;@ J.N. Engineering</div>
					</div>
				</h3>

				<div className="inline_flex">
					<div className="inline_flex_item">
						<TimeIcon />
						<span className="info">November 2019 - May 2020</span>
					</div>

					<div className="inline_flex_item">
						<LocationIcon />
						<span className="info">Nashik, Maharashtra</span>
					</div>
				</div>

				<ul className="work_description">
					<li className="work_description_point">Designed and developed a dynamic ERP Web Application</li>
					<li className="work_description_point">Eased and boosted decision making by digitizing and centralizing data</li>
					<li className="work_description_point"> Reduced Documentation time by Automating Document generation process</li>
				</ul>
			</div>
		</div>
	);
}
