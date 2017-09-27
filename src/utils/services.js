export const getAlbumsService = () => {
    return fetch('http://localhost:8080/albums')
        .then(res => res.json())
};

export const createAlbumService = (name) => {
    return fetch('http://localhost:8080/albums', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name })
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