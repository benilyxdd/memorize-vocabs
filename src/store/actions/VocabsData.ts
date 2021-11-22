import { VocabularyInterface } from '../../constants/VocabularyInterface';

export interface actionInterface {
	type: string;
	payload: {};
}

export interface addVocabInterface extends Omit<actionInterface, 'payload'> {
	payload: {
		vocab: VocabularyInterface;
	};
}

export interface removeVocabInterface extends Omit<actionInterface, 'payload'> {
	payload: {
		word: string;
	};
}

export const ADD_VOCAB = 'ADD_VOCAB';
export const REMOVE_VOCAB = 'REMOVE_VOCAB';

export const addVocab = (vocab: VocabularyInterface): addVocabInterface => {
	return { type: ADD_VOCAB, payload: { vocab } };
};

export const removeVocab = (word: string): removeVocabInterface => {
	return { type: REMOVE_VOCAB, payload: { word } };
};
