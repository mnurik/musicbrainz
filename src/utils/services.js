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

export function callApi(url, config = {}) {
    return fetch(url, config)
        .then(checkStatus)
        .then(parseJSON)
        .catch(error => {
            console.error(error.message);
        });
};

export const fetchLocalAlbums = () => callApi('http://localhost:8080/albums');

export const saveAlbum = (data) => {
    return callApi('http://localhost:8080/albums', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

export const deleteAlbum = (id) => {
    return callApi(`http://localhost:8080/albums/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};

export const fetchAllAlbums = (name) => {
    // Get all albums from MusicBrainz Api.
    return callApi(`http://musicbrainz.org/ws/2/artist?query=${name || "''"}&fmt=json`)
        .then(res => res.artists.map(artist => ({ id: artist.id, name: artist.name, saved: false })));
};