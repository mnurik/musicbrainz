import React from 'react';
import './AlbumList.css';

export default ({ id, name, deleteAlbumItem }) => (
    <div className="album-item">
        {name}
        <span className="delete-album" onClick={() => deleteAlbumItem(id)}>delete</span>
    </div>
);