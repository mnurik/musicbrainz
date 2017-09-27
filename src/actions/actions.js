import { getAlbumsService, createAlbumService, deleteAlbumService } from "./../utils/services";

export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ADD_ALBUM = 'ADD_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';

export const loadAlbums = (albums) => ({ type: ALBUMS_LOAD, payload: albums });
export const addAlbum = (album) => ({ type: ADD_ALBUM, payload: album });
export const removeAlbum = (id) => ({ type: DELETE_ALBUM, payload: id });

export const fetchAlbums = () => {
    return (dispatch) => {
        getAlbumsService()
            .then(albums => dispatch(loadAlbums(albums)))
    }
};

export const saveAlbum = (name) => {
    return (dispatch) => {
        createAlbumService(name)
            .then(album => dispatch(addAlbum(album)))
    }
};

export const deleteAlbum = (id) => {
    return (dispatch) => {
        deleteAlbumService(id)
            .then(() => dispatch(removeAlbum(id)))
    }
};