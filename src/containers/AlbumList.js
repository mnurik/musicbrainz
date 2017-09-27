import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAlbums, deleteAlbum } from './../actions/actions';
import List from './../components/list/AlbumList';

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.deleteAlbumItem = this.deleteAlbumItem.bind(this);
    }

    componentDidMount() {
        this.props.fetchAlbums();
    }

    deleteAlbumItem(id) {
        this.props.deleteAlbum(id);
    }

    render() {
        const { albums } = this.props;
        return (
            <div className="album-list">
                {albums.map(album => <List key={album.id} {...album} deleteAlbumItem={this.deleteAlbumItem} />)}
            </div>
        );
    }
};

export default connect((state) => ({ ...state }), { fetchAlbums, deleteAlbum })(AlbumList);