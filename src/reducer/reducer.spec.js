import reducer from './index';
import { ADD_ALBUM, DELETE_ALBUM } from "./../actions";

describe('Album Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, { type: 'ANYTHING' });
        expect(result).toBeDefined();
    });

    test('adds an album to local DB', () => {
        const startState = {
            localAlbums: []
        };
        const expectedState = {
            localAlbums: [{ id: 1, name: 'Test Data', local: true }]
        };
        const action = { type: ADD_ALBUM, payload: { id: 1, name: 'Test Data', local: true } };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });

    test('remove an album from local DB', () => {
        const startState = {
            localAlbums: [{ id: 1, name: 'Test Data' }]
        };
        const expectedState = {
            localAlbums: []
        };
        const action = { type: DELETE_ALBUM, payload: 1 };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });
});