import React from 'react';

import './resume.css';

import CallIcon from './icons/call_icon.js';
import EmailIcon from './icons/email_icon.js';
import WebsiteIcon from './icons/website_icon.js';
import LinkedinIcon from './icons/linkedin_icon.js';
import GithubIcon from './icons/github_icon.js';
import TimeIcon from './icons/time_icon.js';
import LocationIcon from './icons/location_icon.js';

export default function Resume() {
	return (
		<div className="resume_container">
			<div className="resume">
				<h1 className="name">Hrushikesh Joshi</h1>
				<ul className="contact_details">
					<a className="contact_detail" href="mailto:hrushikesh.joshi.187@gmail.com">
						<EmailIcon />
						hrushikesh.joshi.187@gmail.com
					</a>

					<a className="contact_detail" href="tel:+91 77679 93669">
						<CallIcon />
						+91 77679 93669
					</a>

					<a className="contact_detail">
						<WebsiteIcon />
						HrushikeshJoshi.com
					</a>

					<a className="contact_detail" href="https://www.linkedin.com/in/hrushikeshjoshi187/">
						<LinkedinIcon />
						linkedin.com/in/hrushikeshjoshi187
					</a>

					<a className="contact_detail" href="https://github.com/HrushikeshJoshi187">
						<GithubIcon />
						github.com/HrushikeshJoshi187
					</a>
				</ul>

				<div className="columns">
					<div className="column_0">
						<div className="section">
							<h2 className="section_heading">Experience</h2>
							<div className="sub_section">
								<h3 className="sub_section_heading">
									<div className="inline_flex">
										<div className="inline_flex_item">Software Engineer</div>
										<div className="inline_flex_item company_name">&#160;@ Persistent Systems</div>
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
										Developing solutions according to Requirements and platform specific technical best practices
									</li>
									<li className="work_description_point">Researching and Documenting all the required information</li>
									<li className="work_description_point">Testing developed solutions and debugging issues</li>
									<li className="work_description_point">Lead the development, deployment, and testing</li>
									<li className="work_description_point">Technical issue management & knowledgebase contributions</li>
								</ul>
							</div>
						</div>

						<div className="section">
							<h2 className="section_heading">Education</h2>
							<div className="sub_section">
								<h3 className="sub_section_heading">Rangubai Junnare English Medium High School</h3>
								<p className="text">
									Nashik, Maharashtra
									<br />
									Secondary School Certificate
									<br />
									Percentage: 92.00 / 100.00
									<br />
									June 2015
								</p>
							</div>
							<div className="sub_section">
								<h3 className="sub_section_heading">H.P.T Arts and R.Y.K Science College</h3>
								<p className="text">Nashik, Maharashtra Higher Secondary Certificate Percentage: 87.00 / 100.00 May 2017</p>
							</div>
							K.K. Wagh Institute of Engineering Education and Research Nashik, Maharashtra Bachelor of Computer Engineering CGPA: 9.34 / 10.00
							August 2021
						</div>
					</div>
					<div className="column_1">
						<div className="section">
							<h2 className="section_heading">Skills</h2>
							<div className="text">
								Can develop web apps with HTML, CSS, JavaScript, React.JS, Bootstrap, Wordpress, Jest.
								<br />
								<br />
								Can develop 3D interactive websites with Three.js, Cannon.js.
								<br />
								<br />
								Can develop and configure webpack configurations.
								<br />
								<br />
								Can automate UI testing with Playwright and React testing library.
							</div>
						</div>

						<div className="section">
							<h2 className="section_heading">Interests</h2>
							<div className="text">3D Printing, Paper Engineering, Paper Quilling, Pencil Sketching, Cycling, Trekking, Traveling.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
