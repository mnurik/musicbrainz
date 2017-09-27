import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from "./../components/form/AlbumForm";
import { saveAlbum } from "./../actions/actions";

class AlbumForm extends Component {

    render() {
        const { saveAlbum } = this.props;
        return <Form saveAlbum={saveAlbum} />
    }
};

export default connect((state) => ({ ...state }), { saveAlbum })(AlbumForm);