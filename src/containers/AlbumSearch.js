import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlbumSearchForm from "./../components/AlbumSearchForm";
import { currentAlbumUpdate } from "./../actions";

class AlbumSearch extends Component {

    render() {
        return <AlbumSearchForm onGetAllAlbums={this.props.currentAlbumUpdate} />;
    }
};

export default connect(state => state, { currentAlbumUpdate })(AlbumSearch);