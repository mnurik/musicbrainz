import { ALBUMS_LOAD, ADD_ALBUM, DELETE_ALBUM, ALL_ALBUMS_LOAD } from "./../actions/actions";

export default (state = [], action) => {
    switch (action.type) {
        case ALBUMS_LOAD:
            // Initial load. Also when user clear search input. 
            return action.payload;
        case ADD_ALBUM:
            // Add new album to local db without mutating, replace with clicked album.     
            let index = state.findIndex(album => album.id === action.payload.id);
            return [
                ...state.slice(0, index),
                action.payload,
                ...state.slice(index + 1)
            ];
        case DELETE_ALBUM:
            // When delete album from list give a chance to undo remove process.   
            return state.map(album => album.id !== action.payload ? album
                : Object.assign({}, album, { saved: false, undo: true })
            );
        case ALL_ALBUMS_LOAD:
            // Here I check if album exist inside my local db. If album exist, take from local.    
            return action.payload
                .map(album => {
                    let index = state.findIndex(savedAlbum => savedAlbum.id === album.id);
                    return ~index ? state[index] : album;
                });
        default:
            return state;
    }
};