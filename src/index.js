import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './app.js';
import * as logo_url from '../static/images/LOGO_512.png';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
