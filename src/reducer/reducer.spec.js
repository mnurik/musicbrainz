import reducer from './reducer';
import { ADD_ALBUM, DELETE_ALBUM } from "./../actions/actions";

describe('Album Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, { type: 'ANYTHING' });
        expect(result).toBeDefined();
    });

    test('adds an album to local DB', () => {
        const startState = [
            { id: 1, name: 'Test Data' }
        ];
        const expectedState = [
            { id: 1, name: 'Test Data', saved: true }
        ];
        const action = { type: ADD_ALBUM, payload: { id: 1, name: 'Test Data', saved: true } };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });

    test('remove an album from local DB', () => {
        const startState = [
            { id: 1, name: 'Test Data' }
        ];
        const expectedState = [
            { id: 1, name: 'Test Data', saved: false, undo: true }
        ];
        const action = { type: DELETE_ALBUM, payload: 1 };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });
});