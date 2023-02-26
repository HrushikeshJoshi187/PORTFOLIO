import React, { useEffect } from 'react';

import './contact_us_section.css';

import { get_app_state } from '../app_state.js';
import SectionHeading from '../section_heading/section_heading.js';

export default function ContactUsSection() {
	const app_state = get_app_state();

	let selected_products = [...app_state.products.products];
	let selected_services = [...app_state.services.services];

	selected_products = selected_products.map((product, index) => (
		<li id={`selected_product_${index}`} className="selected_item" key={index}>
			{product}
		</li>
	));

	selected_services = selected_services.map((service, index) => (
		<li id={`selected_service_${index}`} className="selected_item" key={index}>
			{service}
		</li>
	));

	return (
		<div id="contact_us_section" className="contact_us_section">
			<SectionHeading
				heading_text="Contact us"
				heading_description="Email us by filling up the required fields and We will get back to you with your query"
			/>
			<div id="contact_sections" className="contact_sections">
				<form id="email_us_form" className="email_us_form">
					<input id="customer_input_name" className="customer_input" type="text" placeholder="Your Name" required />
					<input id="customer_input_email" className="customer_input" type="text" placeholder="Your Email" required />
					<input id="customer_input_contact_number" className="customer_input" type="text" placeholder="Your Contact Number" required />
					<div id="selected_products_list_name" className="selected_items_list_name">
						Services selected:
					</div>
					{app_state.services.services.size !== 0 && (
						<ul id="selected_products_list" className="selected_items_list">
							{selected_services}
						</ul>
					)}
					{app_state.services.services.size === 0 && (
						<div id="no_selected_services_message" className="no_selected_items_message">
							No Services selected yet.
						</div>
					)}
					<div id="selected_products_list_name" className="selected_items_list_name">
						Products selected:
					</div>
					{app_state.products.products.size !== 0 && (
						<ul id="selected_services_list" className="selected_items_list">
							{selected_products}
						</ul>
					)}
					{app_state.products.products.size === 0 && (
						<div id="no_selected_products_message" className="no_selected_items_message">
							No Products selected yet.
						</div>
					)}
					<textarea id="customer_input_contact_message" className="customer_input" type="text" row="5" placeholder="Message" required />
					<button id="send_email_button" className="send_email_button">
						Send
					</button>
				</form>
				<div id="company_contact_details_section" className="company_contact_details_section"></div>
			</div>
		</div>
	);
}
