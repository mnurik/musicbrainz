import React from 'react';
import './AlbumList.css';

export default ({ id, name, saved, undo, deleteAlbum, saveAlbum }) => (
    <div className="album-item">
        <img src="./album.jpg" alt="Album Title" />
        {name}
        {saved ? <i className="fa fa-trash" onClick={() => deleteAlbum(id)}>delete</i>
            : <i
                className={undo ? "fa fa-undo" : "fa fa-plus"}
                onClick={() => saveAlbum(id, name)}
            >{undo ? "undo" : "save"}</i>}
    </div>
);