import React, { useState, useEffect } from 'react';

import './header_section.css';

export default function HeaderSection() {
	const [image_index, set_image_index] = useState(0);

	const scroll_to = (section_name) => {
		const body = document.getElementById('body');
		const element = document.getElementById(section_name);

		body.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
	};

	useEffect(() => {
		const interval = setInterval(() => {
			set_image_index((image_index) => (image_index + 1 === 3 ? 0 : image_index + 1));
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<header id="header_section" className="header_section">
			<div id="header_slideshow" className="header_slideshow">
				<div
					id="header_slideshow_image_0"
					className={`header_slideshow_image header_slideshow_image_0 ${image_index === 0 ? 'header_slideshow_image_active' : ''}`}
				></div>
				<div
					id="header_slideshow_image_1"
					className={`header_slideshow_image header_slideshow_image_1 ${image_index === 1 ? 'header_slideshow_image_active' : ''}`}
				></div>
				<div
					id="header_slideshow_image_2"
					className={`header_slideshow_image header_slideshow_image_2 ${image_index === 2 ? 'header_slideshow_image_active' : ''}`}
				></div>
			</div>

			<div id="header_heading_and_descripton" className="header_heading_and_descripton">
				<div id="header_heading" className="header_heading">
					One stop market place for all Engineering services
				</div>

				<div id="header_description" className="header_description">
					{/* We provide our best so that you can do your best! */}
					Engineering at it's best to make things easier!
					{/* Service at it's best to make things easier! */}
				</div>

				<div id="header_quick_links" className="header_quick_links">
					<a
						id="getting_started_link"
						className="header_quick_link_button"
						onClick={() => {
							scroll_to('services_section');
						}}
					>
						Get Started
					</a>
				</div>
			</div>
		</header>
	);
}
