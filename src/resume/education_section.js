import React from 'react';

import './resume.css';

import LocationIcon from './icons/location_icon.js';
import GraduationIcon from './icons/graduation_icon.js';

export default function EducationSection() {
	return (
		<div className="section">
			<h2 className="section_heading">Education</h2>
			<div className="sub_section">
				<h3 className="sub_section_heading">
					<div className="inline_flex">
						<div className="inline_flex_item">Bachelor's Degree in Computer Engineering</div>
					</div>
				</h3>
				<div className="inline_flex">
					<div className="inline_flex_item">
						<span className="info">&#160;@&#160;K.K. Wagh Institute of Engineering Education and Research</span>
					</div>
				</div>
				<div className="inline_flex">
					<div className="inline_flex_item">
						<GraduationIcon />
						<span className="info">August 2021</span>
					</div>
					<div className="inline_flex_item">
						<LocationIcon />
						<span className="info">Nashik, Maharashtra</span>
					</div>
				</div>
				<p className="text">CGPA: 9.34 / 10.00</p>
			</div>
			<div className="sub_section">
				<h3 className="sub_section_heading">
					<div className="inline_flex">
						<div className="inline_flex_item">Higher Secondary School Certificate</div>
					</div>
				</h3>
				<div className="inline_flex">
					<div className="inline_flex_item">
						<span className="info">&#160;@&#160;H.P.T Arts and R.Y.K Science College</span>
					</div>
				</div>
				<div className="inline_flex">
					<div className="inline_flex_item">
						<GraduationIcon />
						<span className="info">May 2017</span>
					</div>
					<div className="inline_flex_item">
						<LocationIcon />
						<span className="info">Nashik, Maharashtra</span>
					</div>
				</div>
				<p className="text">Score: 87.38%</p>
			</div>
			<div className="sub_section">
				<h3 className="sub_section_heading">
					<div className="inline_flex">
						<div className="inline_flex_item">Secondary School Certificate</div>
					</div>
				</h3>
				<div className="inline_flex">
					<div className="inline_flex_item">
						<span className="info">&#160;@&#160;Rangubai Junnare English Medium High School</span>
					</div>
				</div>
				<div className="inline_flex">
					<div className="inline_flex_item">
						<GraduationIcon />
						<span className="info">June 2015</span>
					</div>
					<div className="inline_flex_item">
						<LocationIcon />
						<span className="info">Nashik, Maharashtra</span>
					</div>
				</div>
				<p className="text">Score: 92.00%</p>
			</div>
		</div>
	);
}
