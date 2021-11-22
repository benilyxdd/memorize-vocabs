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
						<TableCell align="right">Phrase / Word</TableCell>
						<TableCell align="right">Meaning</TableCell>
						<TableCell align="right">Proficiency</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{vocabsList.map((vocab) => (
						<TableRow key={vocab.word}>
							<TableCell align="right">{vocab.word}</TableCell>
							<TableCell align="right">{vocab.meaning}</TableCell>
							<TableCell align="right">
								{vocab.proficiency}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default VocabsTable;
