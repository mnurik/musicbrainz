import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from "lodash";
import PropTypes from "prop-types";

import * as services from './../utils/services';
import { loadAlbums, deleteAlbum, addAlbum } from './../actions';
import List from './../components/AlbumList';

class AlbumList extends Component {
    componentDidMount() {
        // Fetch albums from local db when component mounted.
        services.fetchLocalAlbums()
            .then(res => this.props.loadAlbums(res));
    }

    onDeleteAlbum = (id) => {
        services.deleteAlbum(id)
            .then(() => this.props.deleteAlbum(id));
    }

    onSaveAlbum = (id, name) => {
        const data = { id, name, local: true };
        services.saveAlbum(data)
            .then(() => this.props.addAlbum(data));
    }

    render() {
        const { globalAlbums, localAlbums } = this.props;
        return (
            <div className="album-list">
                {
                    _.sortBy(_.unionBy(localAlbums, globalAlbums, "id"), 'name')
                        .map(album => (
                            <List key={album.id} name={album.name}>
                                {album.local ?
                                    <i className="fa fa-trash" onClick={() => this.onDeleteAlbum(album.id)}>delete</i>
                                    : <i className="fa fa-plus" onClick={() => this.onSaveAlbum(album.id, album.name)}>save</i>
                                }
                            </List>
                        ))
                }
            </div>
        );
    }
};

AlbumList.contextTypes = {
    store: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    globalAlbums: state.globalAlbums,
    localAlbums: state.localAlbums
});

const mapDispatchToProps = (dispatch) => ({
    loadAlbums: bindActionCreators(loadAlbums, dispatch),
    deleteAlbum: bindActionCreators(deleteAlbum, dispatch),
    addAlbum: bindActionCreators(addAlbum, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);