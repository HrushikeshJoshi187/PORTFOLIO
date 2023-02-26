import React from 'react';

import './about_us_section.css';

import SectionHeading from '../section_heading/section_heading.js';

export default function AboutUsSection() {
	return (
		<div id="about_us_section" className="about_us_section">
			<SectionHeading heading_text="About us" heading_description="" />
			<p id="company_description" className="company_description">
				Sigma Technologix is well known for its prompt, economical and reliable service provider in the field of Testing, Calibration & Validation since
				2015. We have NABL accrediated Laboratory based at Aurangabad. In addion to this, we offer process-oriented engineering solutions that address a
				wide range of requirements and demands from customers in diversified industries. We provide industrial service solutions like Utility
				Maintenance, Electrical services, Fabrication services, PLC Programming , Painting services, Safety services, etc. Keeping in mind our motto of
				continually achieving better customer satisfaction, Sigma Technologix maintains a very professional approach in its working and complies with
				all the National and International standards. Above all we upgrade the knowledge and skills of our personnel through training to ensure
				continuous improvement.
			</p>

			<div id="company_details" className="company_details">
				<div id="company_vision" className="company_vision">
					<h3 id="company_vision_heading" className="company_vision_heading">
						Our Vision
					</h3>
					<p id="company_vision_text" className="company_vision_text">
						Our goal is to continuously upgrade the technology with respect to industries by providing best industrial solutions, addressing all
						concerns and challenges, to lead us to the perfect and diversified company which leverages it's brands and it's people.
					</p>
				</div>

				<div id="company_mission" className="company_mission">
					<h3 id="company_mission_heading" className="company_mission_heading">
						Our Mission
					</h3>
					<p id="company_mission_text" className="company_mission_text">
						To keep abreast with modern technology, we shall deliver complete engineering solutions with zero defects and at best proce to our
						clients and buils a permanent relationship with our customers. To set up highly ethical business standards and be a good co-operate
						citizen, contributing towards the development of the national economy and assisting charitable causes.
					</p>
				</div>

				<div id="company_policy" className="company_policy">
					<h3 id="company_policy_heading" className="company_policy_heading">
						Quality Policy
					</h3>
					<hr></hr>
					<p id="company_policy_text_0" className="company_policy_text">
						Sigma Technologix conducts all calibration under suitable conditions. It uses techniquies that have high reliability and follows
						generally required good laboratory practices.
					</p>
					<p id="company_policy_text_1" className="company_policy_text">
						It's our policy to provide the highest quality os services attainable to clients with aim of achieving total customer statisfaction. We
						constantly endeavor to provide quality in service. We are committed to the continual improvement of our Quality Management System. This
						responsibility and commitment for QMS is practiced and communicated by the management by establishing, documenting, implementing and
						maintaining QMS in accordance with national and international standards thereby continually improving the effectiveness of the system.
					</p>
				</div>
			</div>
		</div>
	);
}
