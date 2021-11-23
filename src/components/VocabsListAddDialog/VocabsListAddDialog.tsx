import React, { useState } from "react";
import { Dialog, DialogTitle, TextField, Stack, Button } from "@mui/material";
import { useDispatch } from "react-redux";

import "./VocabsListAddDialog.css";
import { addVocab } from "../../store/actions/VocabsData";
import { VocabularyInterface } from "../../constants/VocabularyInterface";

interface VocabsListAddDialogProps {
	open: boolean;
	openf: React.Dispatch<React.SetStateAction<boolean>>;
}

const VocabsListAddDialog = ({ open, openf }: VocabsListAddDialogProps) => {
	const dispatch = useDispatch();

	const [newWordInput, setNewWordInput] = useState<string>("");
	const [newMeaningInput, setNewMeaningInput] = useState<string>("");
	const [newExampleInput, setNewExmapleInput] = useState<string>("");

	const resetInput = () => {
		setNewExmapleInput("");
		setNewMeaningInput("");
		setNewWordInput("");
	};

	const addButtonHandler = () => {
		const newWord: VocabularyInterface = {
			word: newWordInput,
			meaning: newMeaningInput,
			example: newExampleInput,
			proficiency: 0,
		};
		dispatch(addVocab(newWord));
		openf(false);
		resetInput();
	};

	return (
		<Dialog open={open}>
			<DialogTitle>Add a new vocabulary</DialogTitle>

			<Stack direction="column" spacing={2} padding={2}>
				<TextField
					variant="outlined"
					value={newWordInput}
					label="New Word"
					onChange={(event) => setNewWordInput(event.target.value)}
				/>
				<TextField
					variant="outlined"
					value={newMeaningInput}
					label="Meaning"
					onChange={(event) => setNewMeaningInput(event.target.value)}
					multiline
					minRows={3}
				/>
				<TextField
					variant="outlined"
					value={newExampleInput}
					label="Example"
					onChange={(event) => setNewExmapleInput(event.target.value)}
					multiline
					minRows={3}
				/>
			</Stack>

			<Stack direction="row" spacing={2} padding={2}>
				<Button variant="contained" onClick={() => openf(false)}>
					Close
				</Button>
				<Button variant="contained" onClick={resetInput} color="error">
					Reset
				</Button>
				<Button variant="contained" onClick={addButtonHandler}>
					Save
				</Button>
			</Stack>
		</Dialog>
	);
};

export default VocabsListAddDialog;
