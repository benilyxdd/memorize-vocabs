import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import VocabsDataReducer from "./store/reducers/VocabsData";

const rootReducer = combineReducers({
	VocabsData: VocabsDataReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export type RootState = ReturnType<typeof rootReducer>;
