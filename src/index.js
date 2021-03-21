import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.REACT_APP_DISABLE_CONSOLE_LOG) {
    console.log("Hello 😄")
    console.log = function () { }
}

const app = (
		<BrowserRouter>
			<App />
		</BrowserRouter>
)


ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
