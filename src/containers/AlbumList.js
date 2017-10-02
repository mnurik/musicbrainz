import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";

import { fetchAlbums, deleteAlbum, saveAlbum } from './../utils/services';
import { AlbumList } from './../components/list/AlbumList';

class AlbumListContainer extends Component {
    componentDidMount() {
        // Fetch albums from local db when component mounted.
        this.props.fetchAlbums();
    }

    render() {
        const { globalAlbums, localAlbums, deleteAlbum, saveAlbum } = this.props;
        return (
            <div className="album-list">
                {
                    _.unionBy(localAlbums, globalAlbums, "id").map(album => <AlbumList key={album.id} name={album.name}>
                        {album.local ?
                            <i className="fa fa-trash" onClick={() => deleteAlbum(album.id)}>delete</i>
                            : <i className="fa fa-plus" onClick={() => saveAlbum(album.id, album.name)}>save</i>}
                    </AlbumList>)
                }
            </div>
        );
    }
};

export default connect(state => ({
    globalAlbums: state.globalAlbums,
    localAlbums: state.localAlbums
}), { fetchAlbums, deleteAlbum, saveAlbum })(AlbumListContainer);