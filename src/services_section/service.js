import React from 'react';

import './service.css';

import { get_app_state, get_app_state_dispatcher } from '../app_state.js';

export default function Service(props) {
	const app_state = get_app_state();
	const app_state_dispatcher = get_app_state_dispatcher();

	return (
		<li
			id={props.service_id}
			className={`service ${app_state.services[props.service_id] ? 'service_active' : ''}`}
			onClick={() => {
				app_state_dispatcher({ type: 'toggle_service_state', service_id: props.service_id, service_name: props.service_name });
			}}
		>
			{props.service_name}
		</li>
	);
}
