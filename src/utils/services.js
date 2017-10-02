import * as actions from "./../actions/actions";

export function checkStatus(response) {
    if (!response.ok) {
        // (response.status < 200 || response.status > 300)
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
    return response;
};

export function parseJSON(response) {
    return response.json();
};

export function callApi(url, config, onRequestSuccess) {
    return (dispatch) => fetch(url, config)
        .then(checkStatus)
        .then(parseJSON)
        .then(response => dispatch(onRequestSuccess(response)))
        .catch(error => {
            const response = error.response;
            if (response === undefined) {
                dispatch(actions.onRequestFailure(error));
            } else {
                error.status = response.status;
                error.statusText = response.statusText;
                response.text().then(text => {
                    try {
                        const json = JSON.parse(text);
                        error.message = json.message;
                    } catch (ex) {
                        error.message = text;
                    }
                    dispatch(actions.onRequestFailure(error));
                });
            }
        });
};

export const fetchAlbums = () => callApi('http://localhost:8080/albums', {}, actions.loadAlbumsAction);

export const saveAlbum = (id, name) => {
    return callApi('http://localhost:8080/albums', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id, name: name, local: true })
    }, actions.addAlbumAction);
};

export const deleteAlbum = (id) => {
    return callApi(`http://localhost:8080/albums/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }, () => actions.deleteAlbumAction(id));
};

export const getAllAlbums = (name) => {
    // Get all albums from MusicBrainz Api.
    return callApi(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json`, {}, actions.allAlbumsLoadAction);
};