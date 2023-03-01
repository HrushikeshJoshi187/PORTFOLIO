import React from 'react';

import './resume.css';

import EducationSection from './education_section.js';
import ExperienceSection from './experience_section.js';
import InterestsSection from './interests_section.js';
import SkillsSection from './skills_section.js';
import ProjectsSection from './projects_section.js';
import CallIcon from './icons/call_icon.js';
import EmailIcon from './icons/email_icon.js';
import WebsiteIcon from './icons/website_icon.js';
import LinkedinIcon from './icons/linkedin_icon.js';
import GithubIcon from './icons/github_icon.js';

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
						<ExperienceSection />
						<EducationSection />
					</div>
					<div className="column_1">
						<SkillsSection />
						{/* <ProjectsSection /> */}
						<InterestsSection />
					</div>
				</div>
			</div>
		</div>
	);
}
