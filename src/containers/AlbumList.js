import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAlbums, deleteAlbum, saveAlbum } from './../actions/actions';
import List from './../components/list/AlbumList';

class AlbumList extends Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const { albums, deleteAlbum, saveAlbum } = this.props;
        return (
            <div className="album-list">
                {
                    albums.map(album => <List
                        key={album.id}
                        {...album}
                        deleteAlbum={deleteAlbum}
                        saveAlbum={saveAlbum} />)
                }
            </div>
        );
    }
};

export default connect(state => state, { fetchAlbums, deleteAlbum, saveAlbum })(AlbumList);