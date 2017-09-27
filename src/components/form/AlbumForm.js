import React from 'react';
import $ from 'jquery';

import "./AlbumForm.css";

export default ({ saveAlbum }) => {
    let search;

    const handleSubmit = (event) => {
        event.preventDefault();
        saveAlbum(search.value);
        event.target.reset();
    }

    const toggle = () => {
        $('.search-button').parent().toggleClass('open');
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input type="search" className="search-box" ref={(node) => { search = node }} />
            <span className="search-button" onClick={() => toggle()}>
                <span className="search-icon"></span>
            </span>
        </form>
    )
};