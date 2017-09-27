import React from 'react';
import $ from 'jquery';

import "./AlbumForm.css";

export default () => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    const toggle = () => {
        $('.search-button').parent().toggleClass('open');
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input type="search" className="search-box" />
            <span className="search-button" onClick={toggle}>
                <span className="search-icon"></span>
            </span>
        </form>
    )
};