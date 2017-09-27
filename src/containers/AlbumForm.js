import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from "./../components/form/AlbumForm";

class AlbumForm extends Component {

    render() {
        return <Form />
    }
}

export default connect()(AlbumForm);