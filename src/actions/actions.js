export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ADD_ALBUM = 'ADD_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const ALL_ALBUMS_LOAD = 'ALL_ALBUMS_LOAD';
export const CURRENT_ALBUM_UPDATED = 'CURRENT_ALBUM_UPDATED';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export const loadAlbums = (albums) => ({ type: ALBUMS_LOAD, payload: albums });
export const addAlbum = (album) => ({ type: ADD_ALBUM, payload: album });
export const deleteAlbum = (id) => ({ type: DELETE_ALBUM, payload: id });
export const allAlbumsLoad = (response) => ({
    type: ALL_ALBUMS_LOAD,
    payload: response.artists.map(artist => ({ id: artist.id, name: artist.name, saved: false }))
});
export const currentAlbumUpdateAction = (value) => ({ type: CURRENT_ALBUM_UPDATED, payload: value });
export const onRequestSuccess = () => ({ type: REQUEST_SUCCESS });
export const onRequestFailure = (error) => ({ type: REQUEST_FAILURE, payload: error });

export const currentAlbumUpdate = (value) => (dispatch) => dispatch(currentAlbumUpdateAction(value));