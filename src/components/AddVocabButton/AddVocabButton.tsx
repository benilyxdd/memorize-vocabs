import React from "react";

import "./AddVocabButton.css";

const AddVocabButton = () => {
	const AddVocabHandler = () => {
		console.log("added");
	};

	return <button onClick={AddVocabHandler}>Add</button>;
};

export default AddVocabButton;
