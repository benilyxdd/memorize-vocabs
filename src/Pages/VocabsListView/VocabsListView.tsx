import React from "react";
import { useSelector } from "react-redux";

import "./VocabsListView.css";
import VocabsTable from "../../components/VocabsTable/VocabsTable";
import { RootState } from "../..";
import { VocabsListInterface } from "../../store/reducers/VocabsData";

const VocabsListView = () => {
	const VocabsList = useSelector<RootState, VocabsListInterface>(
		(state) => state.VocabsData.VocabsList
	);
	return (
		<div>
			<VocabsTable vocabsList={VocabsList} />
		</div>
	);
};

export default VocabsListView;
