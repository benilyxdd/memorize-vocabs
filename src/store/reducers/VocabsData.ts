import Vocabs from '../../constants/Vocabulary.json';
import { VocabularyInterface } from '../../constants/VocabularyInterface';
import {
	ADD_VOCAB,
	MODIFY_PROFICIENCY,
	REMOVE_VOCAB,
} from '../actions/VocabsData';

export type VocabsListInterface = Array<VocabularyInterface>;

export interface initStateInterface {
	VocabsList: VocabsListInterface;
}

const initState: initStateInterface = {
	VocabsList: Vocabs,
};

const VocabsDataReducer = (
	state: initStateInterface = initState,
	action: any
): initStateInterface => {
	switch (action.type) {
		case ADD_VOCAB:
			return {
				...state,
				VocabsList: [...state.VocabsList, action.payload.vocab],
			};
		case REMOVE_VOCAB:
			return {
				...state,
				VocabsList: state.VocabsList.filter(
					(vocab) => vocab.word !== action.payload.word
				),
			};
		case MODIFY_PROFICIENCY:
			const position = state.VocabsList.indexOf(action.payload.word);
			const proficiency = state.VocabsList[position].proficiency;
			if (proficiency <= -5 || proficiency >= 5) {
				return state;
			}

			return {
				...state,
				VocabsList: state.VocabsList.map((vocab) => {
					return vocab.word === action.payload.word.word
						? {
								...vocab,
								proficiency:
									vocab.proficiency +
									(action.payload.plus ? 1 : -1),
						  }
						: vocab;
				}),
			};
		default:
			return {
				...state,
				VocabsList: state.VocabsList.sort((a, b) => {
					return a.word > b.word ? 1 : -1;
				}),
			};
	}
};

export default VocabsDataReducer;
