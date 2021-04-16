import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from'd3';
// import './index.css';
// import App from './App';

const width = 960;
const height = 500;


const App = () => (
<svg width={width} height={height}>
  <circle 
  cx="480"
  cy="250"
  r="245"
  fill="yellow"
  stroke="black"
  stroke-width="10"
/>
</svg>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


