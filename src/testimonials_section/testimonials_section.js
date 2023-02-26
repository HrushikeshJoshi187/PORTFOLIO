import React, { useState, useEffect } from 'react';

import './testimonials_section.css';

import SectionHeading from '../section_heading/section_heading.js';

export default function TestimonialsSection() {
	const [number_of_testimonials, set_number_of_testimonials] = useState(1);
	const [testimonial_index, set_testimonial_index] = useState(0);
	const [ignore_timer, set_ignore_timer] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!ignore_timer) {
				if (number_of_testimonials === 1) {
					set_testimonial_index((testimonial_index) => (testimonial_index + 1 === 6 ? 0 : testimonial_index + 1));
				} else {
					set_testimonial_index((testimonial_index) => (testimonial_index + 1 === 2 ? 0 : testimonial_index + 1));
				}
			}
		}, 10000);

		return () => clearInterval(interval);
	}, [ignore_timer, number_of_testimonials]);

	useEffect(() => {
		const testimonial_cards_div = document.getElementById('testimonial_cards');
		set_number_of_testimonials(testimonial_cards_div.clientWidth > 1203 ? 3 : 1);

		window.addEventListener('resize', () => {
			const testimonial_cards_div = document.getElementById('testimonial_cards');
			set_number_of_testimonials(testimonial_cards_div.clientWidth > 1203 ? 3 : 1);
			set_testimonial_index(0);
		});
	}, []);

	const go_to_testimonial = (testimonial_number) => {
		set_testimonial_index(testimonial_number);
		set_ignore_timer(true);
		const pause_slideshow_for_some_time = setTimeout(() => {
			set_ignore_timer(false);
		}, 5000);

		return () => clearTimeout(pause_slideshow_for_some_time);
	};

	return (
		<div id="testimonials_section" className="testimonials_section">
			<SectionHeading heading_text="Testimonials" heading_description="Here are some reviews from our happy customers" />
			<div id="testimonial_cards" className="testimonial_cards">
				<div
					id="testimonial_card_0_section"
					className={`testimonial_card_section ${
						(number_of_testimonials === 1 && testimonial_index === 0) || (number_of_testimonials === 3 && testimonial_index === 0)
							? 'testimonial_card_section_active'
							: ''
					}`}
				>
					<div id="testimonial_card_0" className="testimonial_card">
						<p id="testimonial_text_0" className="testimonial_text">
							<span id="testimonial_text_0_starting_quote_span" className="testimonial_text_starting_quote_span">
								<span id="testimonial_text_0_starting_quote" className="testimonial_text_starting_quote">
									&#8220;
								</span>
							</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
							ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							<span id="testimonial_text_0_ending_quote_span" className="testimonial_text_ending_quote_span">
								<span id="testimonial_text_0_ending_quote" className="testimonial_text_ending_quote">
									&#8221;
								</span>
							</span>
						</p>

						<h3 id="testimonial_text_0_owner_name" className="testimonial_text_owner_name">
							Hrushikesh Joshi
						</h3>

						<h4 id="testimonial_text_0_owner_details" className="testimonial_text_owner_details">
							Web developer
						</h4>
					</div>
				</div>

				<div
					id="testimonial_card_1_section"
					className={`testimonial_card_section ${
						(number_of_testimonials === 1 && testimonial_index === 1) || (number_of_testimonials === 3 && testimonial_index === 0)
							? 'testimonial_card_section_active'
							: ''
					}`}
				>
					<div id="testimonial_card_1" className="testimonial_card">
						<p id="testimonial_text_1" className="testimonial_text">
							<span id="testimonial_text_1_starting_quote_span" className="testimonial_text_starting_quote_span">
								<span id="testimonial_text_1_starting_quote" className="testimonial_text_starting_quote">
									&#8220;
								</span>
							</span>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							<span id="testimonial_text_1_ending_quote_span" className="testimonial_text_ending_quote_span">
								<span id="testimonial_text_1_ending_quote" className="testimonial_text_ending_quote">
									&#8221;
								</span>
							</span>
						</p>

						<h3 id="testimonial_text_2_owner_name" className="testimonial_text_owner_name">
							Palash Joshi
						</h3>

						<h4 id="testimonial_text_2_owner_details" className="testimonial_text_owner_details">
							Web developer
						</h4>
					</div>
				</div>

				<div
					id="testimonial_card_2_section"
					className={`testimonial_card_section ${
						(number_of_testimonials === 1 && testimonial_index === 2) || (number_of_testimonials === 3 && testimonial_index === 0)
							? 'testimonial_card_section_active'
							: ''
					}`}
				>
					<div id="testimonial_card_2" className="testimonial_card">
						<p id="testimonial_text_2" className="testimonial_text">
							<span id="testimonial_text_2_starting_quote_span" className="testimonial_text_starting_quote_span">
								<span id="testimonial_text_2_starting_quote" className="testimonial_text_starting_quote">
									&#8220;
								</span>
							</span>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							<span id="testimonial_text_2_ending_quote_span" className="testimonial_text_ending_quote_span">
								<span id="testimonial_text_2_ending_quote" className="testimonial_text_ending_quote">
									&#8221;
								</span>
							</span>
						</p>

						<h3 id="testimonial_text_2_owner_name" className="testimonial_text_owner_name">
							Prashant Joshi
						</h3>

						<h4 id="testimonial_text_2_owner_details" className="testimonial_text_owner_details">
							Web developer
						</h4>
					</div>
				</div>

				<div
					id="testimonial_card_3_section"
					className={`testimonial_card_section ${
						(number_of_testimonials === 1 && testimonial_index === 3) || (number_of_testimonials === 3 && testimonial_index === 1)
							? 'testimonial_card_section_active'
							: ''
					}`}
				>
					<div id="testimonial_card_3" className="testimonial_card">
						<p id="testimonial_text_3" className="testimonial_text">
							<span id="testimonial_text_3_starting_quote_span" className="testimonial_text_starting_quote_span">
								<span id="testimonial_text_3_starting_quote" className="testimonial_text_starting_quote">
									&#8220;
								</span>
							</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
							ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							<span id="testimonial_text_3_ending_quote_span" className="testimonial_text_ending_quote_span">
								<span id="testimonial_text_3_ending_quote" className="testimonial_text_ending_quote">
									&#8221;
								</span>
							</span>
						</p>

						<h3 id="testimonial_text_3_owner_name" className="testimonial_text_owner_name">
							Akhilesh Dolare
						</h3>

						<h4 id="testimonial_text_3_owner_details" className="testimonial_text_owner_details">
							Web developer
						</h4>
					</div>
				</div>

				<div
					id="testimonial_card_4_section"
					className={`testimonial_card_section ${
						(number_of_testimonials === 1 && testimonial_index === 4) || (number_of_testimonials === 3 && testimonial_index === 1)
							? 'testimonial_card_section_active'
							: ''
					}`}
				>
					<div id="testimonial_card_4" className="testimonial_card">
						<p id="testimonial_text_4" className="testimonial_text">
							<span id="testimonial_text_4_starting_quote_span" className="testimonial_text_starting_quote_span">
								<span id="testimonial_text_4_starting_quote" className="testimonial_text_starting_quote">
									&#8220;
								</span>
							</span>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							<span id="testimonial_text_4_ending_quote_span" className="testimonial_text_ending_quote_span">
								<span id="testimonial_text_4_ending_quote" className="testimonial_text_ending_quote">
									&#8221;
								</span>
							</span>
						</p>

						<h3 id="testimonial_text_4_owner_name" className="testimonial_text_owner_name">
							Chandrashekhar Joshi
						</h3>

						<h4 id="testimonial_text_4_owner_details" className="testimonial_text_owner_details">
							Web developer
						</h4>
					</div>
				</div>

				<div
					id="testimonial_card_5_section"
					className={`testimonial_card_section ${
						(number_of_testimonials === 1 && testimonial_index === 5) || (number_of_testimonials === 3 && testimonial_index === 1)
							? 'testimonial_card_section_active'
							: ''
					}`}
				>
					<div id="testimonial_card_5" className="testimonial_card">
						<p id="testimonial_text_5" className="testimonial_text">
							<span id="testimonial_text_5_starting_quote_span" className="testimonial_text_starting_quote_span">
								<span id="testimonial_text_5_starting_quote" className="testimonial_text_starting_quote">
									&#8220;
								</span>
							</span>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							<span id="testimonial_text_5_ending_quote_span" className="testimonial_text_ending_quote_span">
								<span id="testimonial_text_5_ending_quote" className="testimonial_text_ending_quote">
									&#8221;
								</span>
							</span>
						</p>

						<h3 id="testimonial_text_5_owner_name" className="testimonial_text_owner_name">
							Vishwas Rao
						</h3>

						<h4 id="testimonial_text_5_owner_details" className="testimonial_text_owner_details">
							Web developer
						</h4>
					</div>
				</div>
			</div>

			<div id="testimonial_cards_pagination" className="testimonial_cards_pagination">
				<button
					id="testimonial_cards_page_indicator_0"
					className="testimonial_cards_page_indicator"
					onClick={() => {
						go_to_testimonial(0);
					}}
				>
					<span
						id="testimonial_cards_page_0_indicator_span"
						className={`testimonial_cards_page_indicator_span ${testimonial_index === 0 ? 'testimonial_cards_page_indicator_span_active' : ''}`}
					></span>
				</button>
				<button
					id="testimonial_cards_page_indicator_1"
					className="testimonial_cards_page_indicator"
					onClick={() => {
						go_to_testimonial(1);
					}}
				>
					<span
						id="testimonial_cards_page_1_indicator_span"
						className={`testimonial_cards_page_indicator_span ${testimonial_index === 1 ? 'testimonial_cards_page_indicator_span_active' : ''}`}
					></span>
				</button>
				{number_of_testimonials === 1 && (
					<>
						<button
							id="testimonial_cards_page_indicator_2"
							className="testimonial_cards_page_indicator"
							onClick={() => {
								go_to_testimonial(2);
							}}
						>
							<span
								id="testimonial_cards_page_2_indicator_span"
								className={`testimonial_cards_page_indicator_span ${
									testimonial_index === 2 ? 'testimonial_cards_page_indicator_span_active' : ''
								}`}
							></span>
						</button>
						<button
							id="testimonial_cards_page_indicator_3"
							className="testimonial_cards_page_indicator"
							onClick={() => {
								go_to_testimonial(3);
							}}
						>
							<span
								id="testimonial_cards_page_3_indicator_span"
								className={`testimonial_cards_page_indicator_span ${
									testimonial_index === 3 ? 'testimonial_cards_page_indicator_span_active' : ''
								}`}
							></span>
						</button>
						<button
							id="testimonial_cards_page_indicator_4"
							className="testimonial_cards_page_indicator"
							onClick={() => {
								go_to_testimonial(4);
							}}
						>
							<span
								id="testimonial_cards_page_4_indicator_span"
								className={`testimonial_cards_page_indicator_span ${
									testimonial_index === 4 ? 'testimonial_cards_page_indicator_span_active' : ''
								}`}
							></span>
						</button>
						<button
							id="testimonial_cards_page_indicator_0"
							className="testimonial_cards_page_indicator"
							onClick={() => {
								go_to_testimonial(5);
							}}
						>
							<span
								id="testimonial_cards_page_5_indicator_span"
								className={`testimonial_cards_page_indicator_span ${
									testimonial_index === 5 ? 'testimonial_cards_page_indicator_span_active' : ''
								}`}
							></span>
						</button>
					</>
				)}
			</div>
		</div>
	);
}
