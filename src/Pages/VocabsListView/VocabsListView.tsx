import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Stack } from "@mui/material";

import "./VocabsListView.css";
import VocabsTable from "../../components/VocabsTable/VocabsTable";
import { RootState } from "../..";
import { VocabsListInterface } from "../../store/reducers/VocabsData";
import VocabsListAddDialog from "../../components/VocabsListAddDialog/VocabsListAddDialog";

const VocabsListView = () => {
	const VocabsList = useSelector<RootState, VocabsListInterface>(
		(state) => state.VocabsData.VocabsList
	);

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
