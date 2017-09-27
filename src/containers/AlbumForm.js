import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from "./../components/form/AlbumForm";
import { getAllAlbums, fetchAlbums } from "./../actions/actions";

class AlbumForm extends Component {

    render() {
        const { getAllAlbums, fetchAlbums } = this.props;
        return <Form getAllAlbums={getAllAlbums} fetchAlbums={fetchAlbums} />
    }
};

export default connect((state) => state, { getAllAlbums, fetchAlbums })(AlbumForm);