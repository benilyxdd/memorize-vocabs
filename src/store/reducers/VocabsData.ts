import Vocabs from '../../constants/Vocabulary.json';

export type VocabsListInterface = Array<{
	word: string;
	meaning: string;
	example: string;
	proficiency: number;
}>;

export interface initStateInterface {
	VocabsList: VocabsListInterface;
}

const initState: initStateInterface = {
	VocabsList: Vocabs,
};

const VocabsDataReducer = (
	state = initState,
	action: { type: string; payload: {} }
) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default VocabsDataReducer;
