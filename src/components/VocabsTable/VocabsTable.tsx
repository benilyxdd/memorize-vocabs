import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	TableHead,
	TableContainer,
	Paper,
} from "@mui/material";

import "./VocabsTable.css";
import { VocabularyInterface } from "../../constants/VocabularyInterface";

type VocabsTabelProps = {
	vocabsList: Array<VocabularyInterface>;
};

const VocabsTable = ({ vocabsList }: VocabsTabelProps) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Phrase / Word</TableCell>
						<TableCell>Meaning</TableCell>
						<TableCell>Proficiency</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{vocabsList.map((vocab) => (
						<TableRow key={vocab.word}>
							<TableCell>{vocab.word}</TableCell>
							<TableCell>{vocab.meaning}</TableCell>
							<TableCell>{vocab.proficiency}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default VocabsTable;
