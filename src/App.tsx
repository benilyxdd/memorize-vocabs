import React from "react";
import "./App.css";

import Vocabs from "./constants/Vocabulary.json";

function App() {
	return (
		<div className="App">
			{Vocabs &&
				Vocabs.map((vocab) => {
					return (
						<div>
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
