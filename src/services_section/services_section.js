import React, { useEffect, useState } from 'react';

import './services_section.css';

import Service from './service.js';
import SectionHeading from '../section_heading/section_heading.js';

export default function ServicesSection() {
	let thermal_calibration_services = [
		'Temperature Sensor with / without Indicator',
		'Temperature Controller',
		'RTD / Thermocouple',
		'Temperature Gauge',
		'Temperature Transmitter with Sensor',
		'Thermo-Hygrometer',
	];

	let mechanical_calibration_services = ['Digital and Dial Pressure Gauge', 'Digital and Dial Vacuum Gauge', 'Magnehelic Gauge'];

	let weight_calibration_services = ['Analytical Balance', 'Weighing scale', 'Weight Box', 'Weight Integrity Test'];

	let linear_calibration_services = ['Vernier Caliper', 'Measuring scale', 'Depth Tape', 'Micrometer', 'Height Gauge', 'Measuring Cylinder'];

	let hvac_clean_room_validation_services = [
		'Air Velocity and CFM Calculation',
		'Air Balancing / Pressure Balancing',
		'Leak Integrity Test',
		'Cold & Hot DOP / PAO',
		'Particle Count - 1 CFM',
		'Particle Count - 50 LPM & 100 LPM',
		'Recovery Test',
		'Contamination Test',
		'Sweep Test',
		'Air Flow Visualization Test using Glycerin',
		'Smoke Test using Di Water Fogger',
		'Light Intensity Test',
		'Installation of HEPA filters / DOP Ports / RLAF / LAF / Air Curtains / Upstream',
	];

	let equipment_validation_mapping_services = [
		'Autoclave',
		'Drying Oven and Vaccum Oven',
		'Muffle Furnace',
		'Water Bath',
		'Incubator',
		'Dry Heat Sterilizer',
		'Stability Chamber',
		'Refrigerator',
		'Cooling Cabinet',
	];

	let utility_maintenance_services = [
		'Boiler Operation and Maintenance',
		'Chiller Operation and Maintenance',
		'Facility Maintenance Service : Fireman / Operator / Helper',
		'AC Installation',
		'AC Repairs',
	];

	let electrical_services = [
		'Supply, Installation, Testing and Commissioning of Switchyard, Busduct, Transformers, PMCC panel, APFC Panel, etc.',
		'Supply, Installation, Testing & Commissioning of Power and Lighting Systems, High Tension (HT) & Low Tension (LT) Cable Laying, Glanding & Termination Work etc.',
	];

	let fabrication_services = ['Pipe and Structural Welding Services', 'In-House Fabrication and Project Management', 'Plant Maintenance'];

	thermal_calibration_services = thermal_calibration_services.map((service, index) => (
		<Service key={index} service_id={`service_category_0_sub_category_0_service_${index}`} service_name={service} />
	));

	mechanical_calibration_services = mechanical_calibration_services.map((service, index) => (
		<Service key={index} service_id={`service_category_0_sub_category_1_service_${index}`} service_name={service} />
	));

	weight_calibration_services = weight_calibration_services.map((service, index) => (
		<Service key={index} service_id={`service_category_0_sub_category_2_service_${index}`} service_name={service} />
	));

	linear_calibration_services = linear_calibration_services.map((service, index) => (
		<Service key={index} service_id={`service_category_0_sub_category_3_service_${index}`} service_name={service} />
	));

	hvac_clean_room_validation_services = hvac_clean_room_validation_services.map((service, index) => (
		<Service key={index} service_id={`service_category_1_sub_category_0_service_${index}`} service_name={service} />
	));

	equipment_validation_mapping_services = equipment_validation_mapping_services.map((service, index) => (
		<Service key={index} service_id={`service_category_1_sub_category_1_service_${index}`} service_name={service} />
	));

	utility_maintenance_services = utility_maintenance_services.map((service, index) => (
		<Service key={index} service_id={`service_category_2_sub_category_0_service_${index}`} service_name={service} />
	));

	electrical_services = electrical_services.map((service, index) => (
		<Service key={index} service_id={`service_category_3_service_${index}`} service_name={service} />
	));

	fabrication_services = fabrication_services.map((service, index) => (
		<Service key={index} service_id={`service_category_4_service_${index}`} service_name={service} />
	));

	const [active_service_categories, set_active_service_categories] = useState({
		service_category_0: false,
		service_category_1: false,
		service_category_2: false,
		service_category_3: false,
		service_category_4: false,
	});

	const toggle_service_category_state = (service_category_number) => {
		const services = document.getElementById(`service_category_${service_category_number}_services`);

		if (services.style.height) {
			services.style.height = null;
		} else {
			services.style.height = services.scrollHeight + 'px';
		}

		switch (service_category_number) {
			case 0:
				{
					const new_state = { ...active_service_categories };
					new_state.service_category_0 = new_state.service_category_0 ? false : true;
					set_active_service_categories(new_state);
				}
				break;

			case 1:
				{
					const new_state = { ...active_service_categories };
					new_state.service_category_1 = new_state.service_category_1 ? false : true;
					set_active_service_categories(new_state);
				}
				break;

			case 2:
				{
					const new_state = { ...active_service_categories };
					new_state.service_category_2 = new_state.service_category_2 ? false : true;
					set_active_service_categories(new_state);
				}
				break;

			case 3:
				{
					const new_state = { ...active_service_categories };
					new_state.service_category_3 = new_state.service_category_3 ? false : true;
					set_active_service_categories(new_state);
				}
				break;

			case 4:
				{
					const new_state = { ...active_service_categories };
					new_state.service_category_4 = new_state.service_category_4 ? false : true;
					set_active_service_categories(new_state);
				}
				break;

			default:
				console.log('Error unknown service category');
		}
	};

	useEffect(() => {
		window.addEventListener('resize', () => {
			set_active_service_categories({
				service_category_0: false,
				service_category_1: false,
				service_category_2: false,
				service_category_3: false,
				service_category_4: false,
			});

			const services = document.getElementsByClassName(`services`);
			for (let i = 0; i < services.length; i++) {
				services[i].style.height = null;
			}
		});
	}, []);

	return (
		<div id="services_section" className="services_section">
			<SectionHeading heading_text="Services" heading_description="Please select all the services that you are interested in" />
			<div id="service_categories" className="service_categories">
				<div id="service_category_0" className={`service_category ${active_service_categories.service_category_0 ? 'service_category_active' : ''}`}>
					<div
						id="service_category_0_header"
						className={`service_category_header ${active_service_categories.service_category_0 ? 'service_category_header_active' : ''}`}
						onClick={() => {
							toggle_service_category_state(0);
						}}
					>
						<h3
							id="service_category_0_name"
							className={`service_category_name ${active_service_categories.service_category_0 ? 'service_category_name_active' : ''}`}
						>
							Calibration Services
						</h3>
						<div id="expand_collapse_symbol" className="expand_collapse_symbol">
							<div
								id="expand_collapse_symbol_bar_0"
								className={`expand_collapse_symbol_bar_0 ${
									active_service_categories.service_category_0 ? 'expand_collapse_symbol_bar_0_active' : ''
								}`}
							></div>
							<div
								id="expand_collapse_symbol_bar_1"
								className={`expand_collapse_symbol_bar_1 ${
									active_service_categories.service_category_0 ? 'expand_collapse_symbol_bar_1_active' : ''
								}`}
							></div>
						</div>
					</div>

					<ul id="service_category_0_services" className="services">
						<ul id="service_category_0_sub_category_0" className="service_category_sub_category">
							<div id="service_category_0_sub_category_0_name" className="service_category_sub_category_name">
								Thermal calibration of
							</div>
							{thermal_calibration_services}
						</ul>

						<ul id="service_category_0_sub_category_1" className="service_category_sub_category">
							<div id="service_category_0_sub_category_1_name" className="service_category_sub_category_name">
								Mechanical calibration of
							</div>
							{mechanical_calibration_services}
						</ul>

						<ul id="service_category_0_sub_category_2" className="service_category_sub_category">
							<div id="service_category_0_sub_category_2_name" className="service_category_sub_category_name">
								Weight calibration of
							</div>
							{weight_calibration_services}
						</ul>

						<ul id="service_category_0_sub_category_3" className="service_category_sub_category">
							<div id="service_category_0_sub_category_3_name" className="service_category_sub_category_name">
								Linear calibration of
							</div>
							{linear_calibration_services}
						</ul>
					</ul>
				</div>

				<div id="service_category_1" className={`service_category ${active_service_categories.service_category_1 ? 'service_category_active' : ''}`}>
					<div
						id="service_category_1_header"
						className={`service_category_header ${active_service_categories.service_category_1 ? 'service_category_header_active' : ''}`}
						onClick={() => {
							toggle_service_category_state(1);
						}}
					>
						<h3
							id="service_category_1_name"
							className={`service_category_name ${active_service_categories.service_category_1 ? 'service_category_name_active' : ''}`}
						>
							Validation Services
						</h3>
						<div id="expand_collapse_symbol" className="expand_collapse_symbol">
							<div
								id="expand_collapse_symbol_bar_0"
								className={`expand_collapse_symbol_bar_0 ${
									active_service_categories.service_category_1 ? 'expand_collapse_symbol_bar_0_active' : ''
								}`}
							></div>
							<div
								id="expand_collapse_symbol_bar_1"
								className={`expand_collapse_symbol_bar_1 ${
									active_service_categories.service_category_1 ? 'expand_collapse_symbol_bar_1_active' : ''
								}`}
							></div>
						</div>
					</div>

					<ul id="service_category_1_services" className="services">
						<ul id="service_category_1_sub_category_0" className="service_category_sub_category">
							<div id="service_category_1_sub_category_0_name" className="service_category_sub_category_name">
								HVAC Clean Room Validation
							</div>
							{hvac_clean_room_validation_services}
						</ul>

						<ul id="service_category_1_sub_category_1" className="service_category_sub_category">
							<div id="service_category_1_sub_category_1_name" className="service_category_sub_category_name">
								Equipment Validation / Mapping
							</div>
							{equipment_validation_mapping_services}
						</ul>
					</ul>
				</div>

				<div id="service_category_2" className={`service_category ${active_service_categories.service_category_2 ? 'service_category_active' : ''}`}>
					<div
						id="service_category_2_header"
						className={`service_category_header ${active_service_categories.service_category_2 ? 'service_category_header_active' : ''}`}
						onClick={() => {
							toggle_service_category_state(2);
						}}
					>
						<h3
							id="service_category_2_name"
							className={`service_category_name ${active_service_categories.service_category_2 ? 'service_category_name_active' : ''}`}
						>
							Maintenance Services
						</h3>
						<div id="expand_collapse_symbol" className="expand_collapse_symbol">
							<div
								id="expand_collapse_symbol_bar_0"
								className={`expand_collapse_symbol_bar_0 ${
									active_service_categories.service_category_2 ? 'expand_collapse_symbol_bar_0_active' : ''
								}`}
							></div>
							<div
								id="expand_collapse_symbol_bar_1"
								className={`expand_collapse_symbol_bar_1 ${
									active_service_categories.service_category_2 ? 'expand_collapse_symbol_bar_1_active' : ''
								}`}
							></div>
						</div>
					</div>

					<ul id="service_category_2_services" className="services">
						<ul id="service_category_2_sub_category_0" className="service_category_sub_category">
							<div id="service_category_2_sub_category_0_name" className="service_category_sub_category_name">
								Utility Maintenance
							</div>
							{utility_maintenance_services}
						</ul>
					</ul>
				</div>

				<div id="service_category_3" className={`service_category ${active_service_categories.service_category_3 ? 'service_category_active' : ''}`}>
					<div
						id="service_category_3_header"
						className={`service_category_header ${active_service_categories.service_category_3 ? 'service_category_header_active' : ''}`}
						onClick={() => {
							toggle_service_category_state(3);
						}}
					>
						<h3
							id="service_category_3_name"
							className={`service_category_name ${active_service_categories.service_category_3 ? 'service_category_name_active' : ''}`}
						>
							Electrical Services
						</h3>
						<div id="expand_collapse_symbol" className="expand_collapse_symbol">
							<div
								id="expand_collapse_symbol_bar_0"
								className={`expand_collapse_symbol_bar_0 ${
									active_service_categories.service_category_3 ? 'expand_collapse_symbol_bar_0_active' : ''
								}`}
							></div>
							<div
								id="expand_collapse_symbol_bar_1"
								className={`expand_collapse_symbol_bar_1 ${
									active_service_categories.service_category_3 ? 'expand_collapse_symbol_bar_1_active' : ''
								}`}
							></div>
						</div>
					</div>

					<ul id="service_category_3_services" className="services">
						<ul id="service_category_3_sub_category_0" className="service_category_sub_category">
							{electrical_services}
						</ul>
					</ul>
				</div>

				<div id="service_category_4" className={`service_category ${active_service_categories.service_category_4 ? 'service_category_active' : ''}`}>
					<div
						id="service_category_4_header"
						className={`service_category_header ${active_service_categories.service_category_4 ? 'service_category_header_active' : ''}`}
						onClick={() => {
							toggle_service_category_state(4);
						}}
					>
						<h3
							id="service_category_4_name"
							className={`service_category_name ${active_service_categories.service_category_4 ? 'service_category_name_active' : ''}`}
						>
							Fabrication Services
						</h3>
						<div id="expand_collapse_symbol" className="expand_collapse_symbol">
							<div
								id="expand_collapse_symbol_bar_0"
								className={`expand_collapse_symbol_bar_0 ${
									active_service_categories.service_category_4 ? 'expand_collapse_symbol_bar_0_active' : ''
								}`}
							></div>
							<div
								id="expand_collapse_symbol_bar_1"
								className={`expand_collapse_symbol_bar_1 ${
									active_service_categories.service_category_4 ? 'expand_collapse_symbol_bar_1_active' : ''
								}`}
							></div>
						</div>
					</div>

					<ul id="service_category_4_services" className="services">
						<ul id="service_category_4_sub_category_0" className="service_category_sub_category">
							{fabrication_services}
						</ul>
					</ul>
				</div>
			</div>
		</div>
	);
}
