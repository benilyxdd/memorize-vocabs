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

export const ADD_VOCAB = 'ADD_VOCAB';

export const addVocab = (vocab: VocabularyInterface): addVocabInterface => {
	return { type: ADD_VOCAB, payload: { vocab } };
};
