import React from 'react';
import './AlbumList.css';

/**
 * List of Album
 *
 * @description Presentational component for showing list of albums.
 * @prop id -> id of album which gives from MusicBrainz.
 * @prop name -> Name of album, gives from MusicBrainz.
 * @prop saved -> Tells that album exist in local db.
 * @prop undo -> when user delete album from local db.
 * @prop deleteAlbum -> dispatch an action for deleting album from local db.
 * @prop saveAlbum -> dispatch an action for saving album to local db.
 */

export default ({ id, name, saved, undo, deleteAlbum, saveAlbum }) => (
    <div className="album-item">
        <img src="./album.jpg" alt="Album Title" />
        {name}
        {
            saved ?
                <i className="fa fa-trash" onClick={() => deleteAlbum(id)}>delete</i>
                : <i className={undo ? "fa fa-undo" : "fa fa-plus"} onClick={() => saveAlbum(id, name)}>
                    {undo ? "undo" : "save"}
                </i>
        }
    </div>
);