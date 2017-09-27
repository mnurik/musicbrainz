import reducer from './reducer';
import { ADD_ALBUM } from "./../actions/albums";

describe('Album Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, { type: 'ANYTHING' });
        expect(result).toBeDefined();
    });

    test('adds a album', () => {
        const startState = [
            { id: 1, name: 'Test Data' }
        ];
        const expectedState = [
            { id: 1, name: 'Test Data' },
            { id: 2, name: 'Test Data 2' }
        ];
        const action = { type: ADD_ALBUM, payload: { id: 2, name: 'Test Data 2' } };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });
});