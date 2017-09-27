import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAlbums } from './../actions/albums';
import List from './../components/list/AlbumList';

class AlbumList extends Component {
    render() {
        return <List />;
    }
};

export default connect(null, { fetchAlbums })(AlbumList);