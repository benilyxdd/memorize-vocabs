import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Stack } from "@mui/material";

import "./VocabsLearnView.css";
import { RootState } from "../..";
import { VocabsListInterface } from "../../store/reducers/VocabsData";
import { VocabularyInterface } from "../../constants/VocabularyInterface";

const getRandomNumber = (
	selectedNumber: Array<number>,
	maxReroll: number | null,
	upperbound: number,
	lowerbound: number = 0
): number | null => {
	if (
		selectedNumber.length === upperbound + 1 ||
		selectedNumber.length === maxReroll
	) {
		return null;
	}
	while (true) {
		const newRandomNumber = Math.floor(
			Math.random() * (upperbound - lowerbound) + lowerbound
		);
		if (!selectedNumber.includes(newRandomNumber)) {
			return newRandomNumber;
		}
	}
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

	const [selectedIndex, setSelectedIndex] = useState<Array<number>>([]);

	// this will  only be null when initialize
	const [currentVocab, setCurrentVocab] =
		useState<VocabularyInterface | null>(null);

	const [answerShowed, setAnswerShowed] = useState<boolean>(false);
	const [goodBadSelected, setGoodBadSelected] = useState<boolean>(false);
	const [finished, setFinished] = useState<boolean>(false);
	const [numberOfQuestions, setNumberOfQuestions] = useState<number | null>(
		null
	);

	const randomizeVocab = (): void => {
		const randomNumber = getRandomNumber(
			selectedIndex,
			numberOfQuestions,
			VocabsList.length - 1
		);
		if (randomNumber === null) {
			if (selectedIndex.length === numberOfQuestions) {
				setFinished(true);
				return;
			} else {
				throw new Error("no more question ");
			}
		}
		setSelectedIndex([...selectedIndex, randomNumber]);
		setCurrentVocab(VocabsList[randomNumber]);
		setAnswerShowed(false);
		setGoodBadSelected(false);
	};

	// get very first vocab when user clicked on the page
	useEffect((): void => {
		randomizeVocab();
	}, []);

	return (
		<>
			{!numberOfQuestions && (
				<>
					{VocabsList.length >= 5 && (
						<Button
							variant="contained"
							onClick={() => setNumberOfQuestions(5)}
						>
							5
						</Button>
					)}
					{VocabsList.length >= 10 && (
						<Button
							variant="contained"
							onClick={() => setNumberOfQuestions(10)}
						>
							10
						</Button>
					)}
					{VocabsList.length >= 15 && (
						<Button
							variant="contained"
							onClick={() => setNumberOfQuestions(15)}
						>
							15
						</Button>
					)}
					{VocabsList.length >= 20 && (
						<Button
							variant="contained"
							onClick={() => setNumberOfQuestions(20)}
						>
							20
						</Button>
					)}
				</>
			)}
			{!finished && numberOfQuestions && (
				<>
					{!answerShowed && (
						<Button
							variant="contained"
							onClick={() => setAnswerShowed(true)}
						>
							Show Answer
						</Button>
					)}
					{answerShowed && !goodBadSelected && (
						<Stack direction="row" spacing={2}>
							<Button
								variant="contained"
								onClick={() => setGoodBadSelected(true)}
								color="error"
							>
								Bad
							</Button>
							<Button
								variant="contained"
								onClick={() => setGoodBadSelected(true)}
							>
								Good
							</Button>
						</Stack>
					)}
					{goodBadSelected && (
						<Button
							variant="contained"
							onClick={() => randomizeVocab()}
						>
							Next
						</Button>
					)}
					<h1>{currentVocab?.word}</h1>
					{answerShowed && (
						<>
							<h2>{currentVocab?.meaning}</h2>
							<h2>
								Example:
								<br />
								{currentVocab?.example}
							</h2>
						</>
					)}
				</>
			)}
			{finished && <h1>You have finished this round.</h1>}
		</>
	);
};

export default VocabsLearnView;
