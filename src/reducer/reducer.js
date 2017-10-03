import * as actions from "./../actions/actions";

export const initialState = {
    localAlbums: [],
    globalAlbums: [],
    currentAlbum: "",
    errorMessage: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.ALBUMS_LOAD:
            // Initial load. Also when user clear search input. 
            return { ...state, localAlbums: action.payload };
        case actions.ADD_ALBUM:
            // Add new album to local db without mutating, replace with clicked album.
            return { ...state, localAlbums: state.localAlbums.concat([action.payload]) };
        case actions.DELETE_ALBUM:
            // Delete album from local db.   
            return { ...state, localAlbums: state.localAlbums.filter(album => album.id !== action.payload) };
        case actions.ALL_ALBUMS_LOAD:
            // Get all albums from MusicBrainz.    
            return { ...state, globalAlbums: action.payload };
        case actions.CURRENT_ALBUM_UPDATED:
            return { ...state, currentAlbum: action.payload };
        case actions.REQUEST_SUCCESS:
            return { ...state, errorMessage: null };
        case actions.REQUEST_FAILURE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};