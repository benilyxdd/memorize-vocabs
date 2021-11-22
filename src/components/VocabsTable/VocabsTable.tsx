import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	TableHead,
	TableContainer,
	Paper,
	IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import "./VocabsTable.css";
import { VocabularyInterface } from "../../constants/VocabularyInterface";
import { removeVocab } from "../../store/actions/VocabsData";

type VocabsTabelProps = {
	vocabsList: Array<VocabularyInterface>;
};

const VocabsTable = ({ vocabsList }: VocabsTabelProps) => {
	const dispatch = useDispatch();
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Phrase / Word</TableCell>
						<TableCell>Meaning</TableCell>
						<TableCell>Proficiency</TableCell>
						<TableCell>Remove</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{vocabsList.map((vocab) => (
						<TableRow key={vocab.word}>
							<TableCell>{vocab.word}</TableCell>
							<TableCell>{vocab.meaning}</TableCell>
							<TableCell>{vocab.proficiency}</TableCell>
							<TableCell>
								<IconButton
									aria-label="delete"
									onClick={() => {
										dispatch(removeVocab(vocab.word));
									}}
								>
									<Delete />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default VocabsTable;
