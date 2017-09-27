import { ALBUMS_LOAD, ADD_ALBUM, DELETE_ALBUM } from "./../actions/albums";

export default (state = [], action) => {
    switch (action.type) {
        case ALBUMS_LOAD:
            return action.payload;
        case ADD_ALBUM:
            return state.concat(action.payload);
        case DELETE_ALBUM:
            return state.filter(album => album.id !== action.payload)
        default:
            return state
    }
};