import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import AlbumSearchForm from "./../components/AlbumSearchForm";
import { currentAlbumUpdate } from "./../actions";

class AlbumSearch extends Component {

    render() {
        return <AlbumSearchForm onGetAllAlbums={this.props.currentAlbumUpdate} />;
    }
};

const mapDispatchToProps = (dispatch) => ({
    currentAlbumUpdate: bindActionCreators(currentAlbumUpdate, dispatch)
});

export default connect(state => state, mapDispatchToProps)(AlbumSearch);