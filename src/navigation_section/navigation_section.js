import React, { useEffect, useState } from 'react';

import './navigation_section.css';

import * as company_logo_url from '../../static/images/company_logo.png';

export default function NavigationSection() {
	const [component_rendered, set_component_rendered] = useState(true);
	const [navigation_menu_state, set_navigation_menu_state] = useState(false);

	const scroll_to = (section_name) => {
		const body = document.getElementById('body');
		const element = document.getElementById(section_name);

		body.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
		set_navigation_menu_state(false);
	};

	const toggle_menu = () => {
		set_navigation_menu_state(navigation_menu_state === false ? true : false);
	};

	useEffect(() => {
		const body = document.getElementById('body');
		body.addEventListener('scroll', () => {
			if (body.scrollTop >= 100) {
				document.getElementById('navigation_section').classList.add('activate_shadow');
			} else {
				document.getElementById('navigation_section').classList.remove('activate_shadow');
			}
		});

		window.addEventListener('resize', () => {
			set_navigation_menu_state(false);
		});
	}, [component_rendered]);

	return (
		<nav id="navigation_section" className="navigation_section">
			<div id="navigation_company_name_and_logo" className="navigation_company_name_and_logo">
				<img id="navigation_company_logo" className="navigation_company_logo" src={company_logo_url.default} />
				<h1 id="navigation_company_name" className="navigation_company_name">
					<span id="navigation_company_name_0" className="navigation_company_name_0">
						Sigma
					</span>
					<span id="navigation_company_name_1" className="navigation_company_name_1">
						Technologix
					</span>
				</h1>
			</div>

			<div id="navigation_links_and_menu" className="navigation_links_and_menu">
				<ul id="navigation_links" className="navigation_links">
					<li id="navigation_menu" className="navigation_menu" onClick={toggle_menu}>
						<div id="navigation_menu_bar_0" className={`navigation_menu_bar_0 ${navigation_menu_state ? 'menu_activated' : ''}`}></div>
						<div id="navigation_menu_bar_1" className={`navigation_menu_bar_1 ${navigation_menu_state ? 'menu_activated' : ''}`}></div>
						<div id="navigation_menu_bar_2" className={`navigation_menu_bar_2 ${navigation_menu_state ? 'menu_activated' : ''}`}></div>
					</li>

					<li
						id="navigation_link_0"
						className="navigation_link"
						onClick={() => {
							scroll_to('services_section');
						}}
					>
						Services
					</li>

					<li
						id="navigation_link_0"
						className="navigation_link"
						onClick={() => {
							scroll_to('products_section');
						}}
					>
						Products
					</li>

					<li
						id="navigation_link_1"
						className="navigation_link"
						onClick={() => {
							scroll_to('about_us_section');
						}}
					>
						About us
					</li>

					<li
						id="navigation_link_2"
						className="navigation_link"
						onClick={() => {
							scroll_to('testimonials_section');
						}}
					>
						Testimonials
					</li>

					<li
						id="navigation_link_3"
						className="navigation_link"
						onClick={() => {
							scroll_to('contact_us_section');
						}}
					>
						Contact us
					</li>
				</ul>
			</div>

			<div id="navigation_overlay" className={`navigation_overlay ${navigation_menu_state ? 'menu_activated' : ''}`}>
				<ul id="navigation_overlay_links" className="navigation_overlay_links">
					<li
						id="navigation_overlay_link_0"
						className="navigation_overlay_link"
						onClick={() => {
							scroll_to('services_section');
						}}
					>
						Services
					</li>

					<li
						id="navigation_overlay_link_0"
						className="navigation_overlay_link"
						onClick={() => {
							scroll_to('products_section');
						}}
					>
						Products
					</li>

					<li
						id="navigation_overlay_link_3"
						className="navigation_overlay_link"
						onClick={() => {
							scroll_to('about_us_section');
						}}
					>
						About us
					</li>

					<li
						id="navigation_overlay_link_2"
						className="navigation_overlay_link"
						onClick={() => {
							scroll_to('testimonials_section');
						}}
					>
						Testimonials
					</li>

					<li
						id="navigation_overlay_link_1"
						className="navigation_overlay_link"
						onClick={() => {
							scroll_to('contact_us_section');
						}}
					>
						Contact us
					</li>
				</ul>
			</div>
		</nav>
	);
}
