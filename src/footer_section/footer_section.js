import React from 'react';

import './footer_section.css';

export default function FooterSection() {
	const scroll_to = (section_name) => {
		const body = document.getElementById('body');
		const element = document.getElementById(section_name);

		body.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
	};

	return (
		<footer id="footer_section" className="footer_section">
			<div id="copyright_details" className="copyright_details">
				&#169; Copyright 2023 Sigma Technologix.
				<br />
				All rights reserved
			</div>
			<div id="footer_links" className="footer_links">
				<ul id="footer_links_section_0" className="footer_links_section">
					<li
						id="footer_link_0"
						className="footer_link"
						onClick={() => {
							scroll_to('services_section');
						}}
					>
						Services
					</li>

					<li
						id="footer_link_0"
						className="footer_link"
						onClick={() => {
							scroll_to('products_section');
						}}
					>
						Products
					</li>

					<li
						id="footer_link_1"
						className="footer_link"
						onClick={() => {
							scroll_to('about_us_section');
						}}
					>
						About us
					</li>

					<li
						id="footer_link_2"
						className="footer_link"
						onClick={() => {
							scroll_to('testimonials_section');
						}}
					>
						Testimonials
					</li>

					<li
						id="footer_link_3"
						className="footer_link"
						onClick={() => {
							scroll_to('contact_us_section');
						}}
					>
						Contact us
					</li>
				</ul>
				<ul id="footer_links_section_1" className="footer_links_section">
					<li id="footer_link_4" className="footer_link">
						Privacy policy
					</li>

					<li id="footer_link_5" className="footer_link">
						Terms of use
					</li>
				</ul>
			</div>
		</footer>
	);
}
