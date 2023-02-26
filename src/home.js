import React from 'react';

import './home.css';

import AppStateProvider from './app_state.js';
import NavigationSection from './navigation_section/navigation_section.js';
import HeaderSection from './header_section/header_section.js';
import ServicesSection from './services_section/services_section.js';
import ProductsSection from './products_section/products_section.js';
import AboutUsSection from './about_us_section/about_us_section.js';
import TestimonialsSection from './testimonials_section/testimonials_section.js';
import ContactUsSection from './contact_us_section/contact_us_section.js';
import FooterSection from './footer_section/footer_section.js';

export default function Home() {
	return (
		<AppStateProvider>
			<div id="home" className="home">
				{/* <NavigationSection />
				<HeaderSection />
				<ServicesSection />
				<ProductsSection />
				<AboutUsSection />
				<TestimonialsSection />
				<ContactUsSection />
				<FooterSection /> */}
			</div>
		</AppStateProvider>
	);
}
