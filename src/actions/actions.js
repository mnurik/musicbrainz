import { getAlbumsService, saveAlbumService, deleteAlbumService, getAllAlbumsService } from "./../utils/services";

export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ADD_ALBUM = 'ADD_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const ALL_ALBUMS_LOAD = 'ALL_ALBUMS_LOAD';

export const loadAlbumsAction = (albums) => ({ type: ALBUMS_LOAD, payload: albums });
export const addAlbumAction = (album) => ({ type: ADD_ALBUM, payload: album });
export const deleteAlbumAction = (id) => ({ type: DELETE_ALBUM, payload: id });
export const allAlbumsLoadAction = (albums) => ({ type: ALL_ALBUMS_LOAD, payload: albums });

export const fetchAlbums = () => {
    return (dispatch) => {
        getAlbumsService()
            .then(albums => dispatch(loadAlbumsAction(albums)))
    }
};

export const saveAlbum = (id, name) => {
    return (dispatch) => {
        saveAlbumService(id, name)
            .then(album => dispatch(addAlbumAction(album)))
    }
};

export const deleteAlbum = (id) => {
    return (dispatch) => {
        deleteAlbumService(id)
            .then(() => dispatch(deleteAlbumAction(id)))
    }
};

export const getAllAlbums = (name) => {
    return (dispatch) => {
        // Here i called first get local albums, then after success response called get albums from MusicBrainz api.
        // The reason for doing that is, to get know if album exist inside local db.
        getAlbumsService()
            .then(albums => {
                dispatch(loadAlbumsAction(albums));
                return getAllAlbumsService(name);
            })
            .then(albums => dispatch(allAlbumsLoadAction(albums)))
    }
};