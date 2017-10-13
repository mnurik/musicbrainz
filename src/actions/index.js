import {
    ALBUMS_LOAD,
    ADD_ALBUM,
    DELETE_ALBUM,
    ALL_ALBUMS_LOAD,
    CURRENT_ALBUM_UPDATE
} from './../constants';

export const loadAlbums = (albums) => ({ type: ALBUMS_LOAD, payload: albums });
export const addAlbum = (album) => ({ type: ADD_ALBUM, payload: album });
export const deleteAlbum = (id) => ({ type: DELETE_ALBUM, payload: id });
export const currentAlbumUpdate = (value) => ({ type: CURRENT_ALBUM_UPDATE, payload: value });
export const allAlbumsLoad = (artists) => ({ type: ALL_ALBUMS_LOAD, payload: artists });