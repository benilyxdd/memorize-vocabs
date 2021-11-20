import React from "react";
import "./App.css";

import AddVocabButton from "./components/AddVocabButton/AddVocabButton";

import Vocabs from "./constants/Vocabulary.json";

function App() {
	return (
		<div className="App">
			<AddVocabButton />
			{Vocabs &&
				Vocabs.map((vocab) => {
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