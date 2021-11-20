import Vocabs from '../../constants/Vocabulary.json';
import { VocabularyInterface } from '../../constants/VocabularyInterface';
import { addVocabInterface } from '../actions/VocabsData';
import { ADD_VOCAB } from '../actions/VocabsData';

export type VocabsListInterface = Array<VocabularyInterface>;

export interface initStateInterface {
	VocabsList: VocabsListInterface;
}

const initState: initStateInterface = {
	VocabsList: Vocabs,
};

const VocabsDataReducer = (
	state: initStateInterface = initState,
	action: addVocabInterface
): initStateInterface => {
	switch (action.type) {
		case ADD_VOCAB:
			return {
				...state,
				VocabsList: [...state.VocabsList, action.payload.vocab],
			};
		default:
			return state;
	}
};

export default VocabsDataReducer;
