import React from 'react';

import './product.css';

import { get_app_state, get_app_state_dispatcher } from '../app_state.js';

export default function Product(props) {
	const app_state = get_app_state();
	const app_state_dispatcher = get_app_state_dispatcher();

	return (
		<div id={`product_card_section_${props.product_id}`} className="product_card_section">
			<div
				id={`product_card_${props.product_id}`}
				className={`product_card ${app_state.products[`product_${props.product_id}`] ? 'product_card_active' : ''}`}
				onClick={() => {
					app_state_dispatcher({ type: 'toggle_product_state', product_id: `product_${props.product_id}`, product_name: props.product_name });
				}}
			>
				<div id={`product_image_${props.product_id}`} className="product_image"></div>
				<div
					id={`product_name_${props.product_id}`}
					className={`product_name ${app_state.products[`product_${props.product_id}`] ? 'product_name_active' : ''}`}
				>
					{props.product_name}
				</div>
			</div>
		</div>
	);
}
