import React from 'react';
import $ from 'jquery';

import "./AlbumForm.css";

export default ({ fetchAlbums, getAllAlbums }) => {
    const getData = ({ target }) => {
        if (target.value === "") fetchAlbums()
        else getAllAlbums(target.value);
    }

    const toggle = () => {
        $('.search-button').parent().toggleClass('open');
    }

    return (
        <div className="search">
            <input type="search" className="search-box" onChange={getData} />
            <span className="search-button" onClick={() => toggle()}>
                <span className="search-icon"></span>
            </span>
        </div>
    )
};