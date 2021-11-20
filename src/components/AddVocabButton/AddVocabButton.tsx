import React from "react";
import { useDispatch } from "react-redux";

import "./AddVocabButton.css";
import { addVocab } from "../../store/actions/VocabsData";

// need to come up with new words
const testItem = {
	word: "along with",
	meaning: "in addition to someone or something else",
	example: "Now we’ve got hospital bills along with our usual expenses.",
	proficiency: 0,
};

const AddVocabButton = () => {
	const dispatch = useDispatch();

	const AddVocabHandler = () => {
		// change testItem later
		dispatch(addVocab(testItem));
	};

	return <button onClick={AddVocabHandler}>Add</button>;
};

export default AddVocabButton;
