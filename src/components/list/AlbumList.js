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

export const AlbumList = ({ name, children }) => (
    <div className="album-item">
        <img src="./album.jpg" alt="Album Title" className="album-image" />
        {name} {children}
    </div>
);