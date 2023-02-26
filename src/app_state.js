import React, { createContext, useContext, useReducer } from 'react';

const AppStateContext = createContext(null);
const AppStateDispatcherContext = createContext(null);

const initial_app_state = {
	services: {
		// electrical_services: [],
		// fabrication_services: [],
		// thermal_calibration_services: [],
		// mechanical_calibration_services: [],
		// weight_calibration_services: [],
		// linear_calibration_services: [],
		// hvac_clean_room_validation_services: [],
		// equipment_validation_mapping_services: [],
		// utility_maintenance_services: [],

		services: new Set(),

		service_category_0_sub_category_0_service_0: false,
		service_category_0_sub_category_0_service_1: false,
		service_category_0_sub_category_0_service_2: false,
		service_category_0_sub_category_0_service_3: false,
		service_category_0_sub_category_0_service_4: false,
		service_category_0_sub_category_0_service_5: false,
		service_category_0_sub_category_1_service_0: false,
		service_category_0_sub_category_1_service_1: false,
		service_category_0_sub_category_1_service_2: false,
		service_category_0_sub_category_2_service_0: false,
		service_category_0_sub_category_2_service_1: false,
		service_category_0_sub_category_2_service_2: false,
		service_category_0_sub_category_2_service_3: false,
		service_category_0_sub_category_3_service_0: false,
		service_category_0_sub_category_3_service_1: false,
		service_category_0_sub_category_3_service_2: false,
		service_category_0_sub_category_3_service_3: false,
		service_category_0_sub_category_3_service_4: false,
		service_category_0_sub_category_3_service_5: false,

		service_category_1_sub_category_0_service_0: false,
		service_category_1_sub_category_0_service_1: false,
		service_category_1_sub_category_0_service_2: false,
		service_category_1_sub_category_0_service_3: false,
		service_category_1_sub_category_0_service_4: false,
		service_category_1_sub_category_0_service_5: false,
		service_category_1_sub_category_0_service_6: false,
		service_category_1_sub_category_0_service_7: false,
		service_category_1_sub_category_0_service_8: false,
		service_category_1_sub_category_0_service_9: false,
		service_category_1_sub_category_0_service_10: false,
		service_category_1_sub_category_0_service_11: false,
		service_category_1_sub_category_0_service_12: false,
		service_category_1_sub_category_1_service_0: false,
		service_category_1_sub_category_1_service_1: false,
		service_category_1_sub_category_1_service_2: false,
		service_category_1_sub_category_1_service_3: false,
		service_category_1_sub_category_1_service_4: false,
		service_category_1_sub_category_1_service_5: false,
		service_category_1_sub_category_1_service_6: false,
		service_category_1_sub_category_1_service_7: false,
		service_category_1_sub_category_1_service_8: false,

		service_category_2_sub_category_0_service_0: false,
		service_category_2_sub_category_0_service_1: false,
		service_category_2_sub_category_0_service_2: false,
		service_category_2_sub_category_0_service_3: false,
		service_category_2_sub_category_0_service_4: false,

		service_category_3_service_0: false,
		service_category_3_service_1: false,

		service_category_4_service_0: false,
		service_category_4_service_1: false,
		service_category_4_service_2: false,
	},
	products: {
		products: new Set(),
		product_0: false,
		product_1: false,
		product_2: false,
		product_3: false,
		product_4: false,
	},
};

function app_state_reducer(previous_app_state, action) {
	let next_app_state = {};
	switch (action.type) {
		case 'toggle_service_state': {
			next_app_state = { ...previous_app_state };
			next_app_state.services[action.service_id] = next_app_state.services[action.service_id] ? false : true;
			next_app_state.services.services.has(action.service_name)
				? next_app_state.services.services.delete(action.service_name)
				: next_app_state.services.services.add(action.service_name);
			return next_app_state;
		}

		case 'toggle_product_state': {
			next_app_state = { ...previous_app_state };
			next_app_state.products[action.product_id] = next_app_state.products[action.product_id] ? false : true;
			next_app_state.products.products.has(action.product_name)
				? next_app_state.products.products.delete(action.product_name)
				: next_app_state.products.products.add(action.product_name);
			return next_app_state;
		}

		default:
			console.log('Data action not found !');
	}
}

export default function AppStateProvider(props) {
	const [app_state, app_state_dispatcher] = useReducer(app_state_reducer, initial_app_state);

	return (
		<AppStateContext.Provider value={app_state}>
			<AppStateDispatcherContext.Provider value={app_state_dispatcher}>{props.children}</AppStateDispatcherContext.Provider>
		</AppStateContext.Provider>
	);
}

export function get_app_state() {
	return useContext(AppStateContext);
}

export function get_app_state_dispatcher() {
	return useContext(AppStateDispatcherContext);
}
