import React from 'react';
import { connect } from 'react-redux';

import { AlbumSearch } from "./../components/search/AlbumSearch";
import { getAllAlbums } from "./../utils/services";
import { currentAlbumUpdate } from "./../actions/actions";

const AlbumSearchContainer = (props) => {
    return <AlbumSearch
        currentAlbumUpdate={props.currentAlbumUpdate}
        currentAlbum={props.currentAlbum}
        getAllAlbums={props.getAllAlbums}
        errorMessage={props.errorMessage}
    />;
};

export default connect((state) => ({
    currentAlbum: state.currentAlbum,
    errorMessage: state.errorMessage
}), { getAllAlbums, currentAlbumUpdate })(AlbumSearchContainer);