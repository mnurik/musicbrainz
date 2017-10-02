import React from 'react';
import { connect } from 'react-redux';

import { AlbumSearch } from "./../components/search/AlbumSearch";
import { getAllAlbums } from "./../utils/services";
import { currentAlbumUpdate } from "./../actions/actions";

const AlbumSearchContainer = (props) => {

    const currentAlbum = (value) => {
        props.currentAlbumUpdate(value);
        props.getAllAlbums(value);
    };

    return <AlbumSearch currentAlbum={currentAlbum} >{props.errorMessage.message}</AlbumSearch>;
};

export default connect((state) => ({
    currentAlbum: state.currentAlbum,
    errorMessage: state.errorMessage
}), { getAllAlbums, currentAlbumUpdate })(AlbumSearchContainer);