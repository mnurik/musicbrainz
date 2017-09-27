import React from 'react';
import './AlbumList.css';

export default ({ id, name, deleteAlbum }) => (
    <div className="album-item">
        {name}
        <span className="delete-album" onClick={() => deleteAlbum(id)}>delete</span>
    </div>
);