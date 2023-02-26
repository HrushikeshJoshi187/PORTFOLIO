import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './app.css';

import Home from './home.js';
import PageNotFound from './page_not_found/page_not_found.js';

export default function App() {
	return (
		<div id="app" className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
