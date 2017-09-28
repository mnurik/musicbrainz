import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAlbums, deleteAlbum, saveAlbum } from './../actions/actions';
import AlbumList from './../components/list/AlbumList';

class AlbumListContainer extends Component {
    componentDidMount() {
        // Fetch albums from local db when component mounted.
        this.props.fetchAlbums();
    }

    render() {
        const { albums, deleteAlbum, saveAlbum } = this.props;
        return (
            <div className="album-list">
                {
                    albums.map(album => <AlbumList
                        key={album.id}
                        {...album}
                        deleteAlbum={deleteAlbum}
                        saveAlbum={saveAlbum} />)
                }
            </div>
        );
    }
};

export default connect(state => state, { fetchAlbums, deleteAlbum, saveAlbum })(AlbumListContainer);