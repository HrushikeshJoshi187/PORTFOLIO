import React from 'react';

import './products_section.css';

import SectionHeading from '../section_heading/section_heading.js';
import Product from './product.js';

export default function ProductsSection() {
	let products = ['Hygrometer', 'Pressure Gauge', 'Temperature Sensor', 'Temperatrue Controller', 'Data Logger'];

	products = products.map((product, index) => <Product key={index} product_id={index} product_name={product} />);

	return (
		<div id="products_section" className="products_section">
			<SectionHeading heading_text="Products" heading_description="Please select all the products that you are interested in" />

			<div id="product_cards" className="product_cards">
				{products}
			</div>
		</div>
	);
}
