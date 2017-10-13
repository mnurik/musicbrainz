import {
    ALBUMS_LOAD,
    ADD_ALBUM,
    DELETE_ALBUM,
    ALL_ALBUMS_LOAD,
    CURRENT_ALBUM_UPDATE
} from './../constants';

export const initialState = {
    localAlbums: [],
    globalAlbums: [],
    currentAlbum: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ALBUMS_LOAD:
            // Initial load. Also when user clear search input. 
            return { ...state, localAlbums: action.payload };
        case ADD_ALBUM:
            // Add new album to local db without mutating, replace with clicked album.
            return { ...state, localAlbums: state.localAlbums.concat([action.payload]) };
        case DELETE_ALBUM:
            // Delete album from local db.   
            return { ...state, localAlbums: state.localAlbums.filter(album => album.id !== action.payload) };
        case ALL_ALBUMS_LOAD:
            // Get all albums from MusicBrainz.    
            return { ...state, globalAlbums: action.payload };
        case CURRENT_ALBUM_UPDATE:
            return { ...state, currentAlbum: action.payload }
        default:
            return state;
    }
};