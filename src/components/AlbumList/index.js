import React from 'react';
import './style.css';
import PropTypes from "prop-types";

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

const AlbumList = ({ name, children }) => (
    <div className="album__item">
        <img src="./album.jpg" alt="Album Title" className="album__image" />
        {name} {children}
    </div>
);

AlbumList.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default AlbumList;