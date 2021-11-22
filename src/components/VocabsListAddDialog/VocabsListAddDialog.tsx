import React from "react";
import { Dialog, DialogTitle } from "@mui/material";

import "./VocabsListAddDialog.css";

interface VocabsListAddDialogProps {
	open: boolean;
}

const VocabsListAddDialog = ({ open }: VocabsListAddDialogProps) => {
	return (
		<Dialog open={open}>
			<DialogTitle>Add a new vocabulary</DialogTitle>
		</Dialog>
	);
};

export default VocabsListAddDialog;
