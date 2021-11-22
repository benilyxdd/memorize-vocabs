import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import { RootState } from ".";
import { VocabsListInterface } from "./store/reducers/VocabsData";

function App() {
	const VocabsList = useSelector<RootState, VocabsListInterface>(
		(state) => state.VocabsData.VocabsList
	);

	return (
		<div className="App">
			{VocabsList &&
				VocabsList.map((vocab) => {
					return (
						<div key={vocab.word}>
							<h1>{vocab.word}</h1>
							<h2>{vocab.meaning}</h2>
							<h2>{vocab.example}</h2>
						</div>
					);
				})}
		</div>
	);
}

export default App;
