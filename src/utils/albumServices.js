export const getAlbums = () => {
    return fetch('http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases&fmt=json')
        .then(res => res.json())
};