import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const ele = (
	<div className = 'page'
	style = {
		{ textAlign: 'center' }
	}>
	<h1 id = 'head'> Never Stop Learning!!! </h1>
	<h2 style = {
		{ color: 'green' }
	}> Because life never stops teaching </h2>
	<p> From GeeksforGeeks </p>

	</div>
);

ReactDOM.render(ele, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
