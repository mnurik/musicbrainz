export const getAlbumsService = () => {
    return fetch('http://localhost:8080/albums')
        .then(res => res.json());
};

export const saveAlbumService = (id, name) => {
    return fetch('http://localhost:8080/albums', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id, name: name, saved: true })
    })
        .then(res => res.json());
};

export const deleteAlbumService = (id) => {
    return fetch(`http://localhost:8080/albums/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};

export const getAllAlbumsService = (name) => {
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json`)
        .then(res => res.json())
        .then(res => res.artists.map(artist => ({ id: artist.id, name: artist.name, saved: false })));
};