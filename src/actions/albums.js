import { getAlbums } from "./../utils/albumServices";

export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const loadAlbums = (albums) => ({ type: ALBUMS_LOAD, payload: albums });

export const fetchAlbums = () => {
    return (dispatch) => {
        getAlbums()
            .then(albums => dispatch(loadAlbums(albums)))
    }
};