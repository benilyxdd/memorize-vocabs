import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Stack } from "@mui/material";

import "./VocabsListView.css";
import VocabsTable from "../../components/VocabsTable/VocabsTable";
import { RootState } from "../..";
import { VocabsListInterface } from "../../store/reducers/VocabsData";
import VocabsListAddDialog from "../../components/VocabsListAddDialog/VocabsListAddDialog";

interface downloadJsonProps {
	data: string;
	fileName: string; // eg. 'user.json'
}

const downloadJson = ({ data, fileName }: downloadJsonProps): void => {
	const blob = new Blob([data], { type: "text/json" });
	const a = document.createElement("a");
	a.download = fileName;
	a.href = window.URL.createObjectURL(blob);
	const clickEvt = new MouseEvent("click", {
		view: window,
		bubbles: true,
		cancelable: true,
	});
	a.dispatchEvent(clickEvt);
	a.remove();
};

const VocabsListView = () => {
	const VocabsList = useSelector<RootState, VocabsListInterface>(
		(state) => state.VocabsData.VocabsList
	);

	const exportToJson = (event: React.SyntheticEvent) => {
		event.preventDefault();
		downloadJson({
			data: JSON.stringify(VocabsList),
			fileName: "Vocabulary.json",
		});
	};

	const [addDialogOpened, setAddDialogOpened] = useState<boolean>(false);
	return (
		<>
			<Stack direction="row" spacing={2} padding={1}>
				<Button
					variant="contained"
					onClick={() => setAddDialogOpened(true)}
				>
					Add
				</Button>
				<Button variant="contained" onClick={exportToJson}>
					Export to JSON
				</Button>
			</Stack>
			<VocabsListAddDialog
				open={addDialogOpened}
				openf={setAddDialogOpened}
			/>
			<VocabsTable vocabsList={VocabsList} />
		</>
	);
};

export default VocabsListView;
