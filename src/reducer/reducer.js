import { ALBUMS_LOAD, ADD_ALBUM, DELETE_ALBUM, ALL_ALBUMS_LOAD } from "./../actions/actions";

export default (state = [], action) => {
    switch (action.type) {
        case ALBUMS_LOAD:
            return action.payload;
        case ADD_ALBUM:
            let index = state.findIndex(album => album.id === action.payload.id);
            return [
                ...state.slice(0, index),
                action.payload,
                ...state.slice(index + 1)
            ];
        case DELETE_ALBUM:
            return state.map(album => album.id !== action.payload ? album
                : Object.assign({}, album, { saved: false, undo: true })
            );
        case ALL_ALBUMS_LOAD:
            return action.payload
                .map(album => {
                    let index = state.findIndex(savedAlbum => savedAlbum.id === album.id);
                    return ~index ? state[index] : album;
                });
        default:
            return state;
    }
};