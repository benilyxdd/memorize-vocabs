import { VocabularyInterface } from '../../constants/VocabularyInterface';

interface actionInterface {
	type: string;
	payload: {};
}

interface addVocabInterface extends Omit<actionInterface, 'payload'> {
	payload: {
		vocab: VocabularyInterface;
	};
}

interface removeVocabInterface extends Omit<actionInterface, 'payload'> {
	payload: {
		word: string;
	};
}

interface modifyProficiencyInterface extends Omit<actionInterface, 'payload'> {
	payload: {
		word: VocabularyInterface;
		plus: boolean;
	};
}

export const ADD_VOCAB = 'ADD_VOCAB';
export const REMOVE_VOCAB = 'REMOVE_VOCAB';
export const MODIFY_PROFICIENCY = 'MODIFY_PROFICIENCY';

export const addVocab = (vocab: VocabularyInterface): addVocabInterface => {
	return { type: ADD_VOCAB, payload: { vocab } };
};

export const removeVocab = (word: string): removeVocabInterface => {
	return { type: REMOVE_VOCAB, payload: { word } };
};

export const modifyProficiency = (
	word: VocabularyInterface,
	plus: boolean
): modifyProficiencyInterface => {
	return { type: MODIFY_PROFICIENCY, payload: { word, plus } };
};
