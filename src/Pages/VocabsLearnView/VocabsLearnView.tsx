import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./VocabsLearnView.css";
import { RootState } from "../..";
import { VocabsListInterface } from "../../store/reducers/VocabsData";
import { VocabularyInterface } from "../../constants/VocabularyInterface";

const getRandomNumber = (
	upperbound: number,
	lowerbound: number = 0
): number => {
	return Math.floor(Math.random() * (upperbound - lowerbound) + lowerbound);
};

const VocabsLearnView = () => {
	const VocabsList = useSelector<RootState, VocabsListInterface>(
		(state) => state.VocabsData.VocabsList
	);

	// a list of index -> choose random index in VocabsList
	const randomList: Array<number> = VocabsList.reduce((acc, vocab, index) => {
		const newAcc = [...acc];
		for (let i = 0; i < 5 - vocab.proficiency; i++) {
			newAcc.push(index);
		}
		return newAcc;
	}, [] as number[]);

	// this will  only be null when initialize
	const [currentVocab, setCurrentVocab] =
		useState<VocabularyInterface | null>(null);

	const [answerShowed, setAnswerShowed] = useState<boolean>(false);

	const randomizeVocab = (): void => {
		const randomNumber = getRandomNumber(VocabsList.length - 1);
		setCurrentVocab(VocabsList[randomNumber]);
	};

	useEffect((): void => {
		randomizeVocab();
	}, []);

	return (
		<>
			<h1>{currentVocab?.word}</h1>
			{answerShowed && <h2>{currentVocab?.meaning}</h2>}
			{answerShowed && (
				<h2>
					Example:
					<br />
					{currentVocab?.example}
				</h2>
			)}
		</>
	);
};

export default VocabsLearnView;
