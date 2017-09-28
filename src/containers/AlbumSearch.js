import React from 'react';
import { connect } from 'react-redux';

import AlbumSearch from "./../components/search/AlbumSearch";
import { getAllAlbums, fetchAlbums } from "./../actions/actions";

const AlbumSearchContainer = ({ getAllAlbums, fetchAlbums }) =>
    <AlbumSearch getAllAlbums={getAllAlbums} fetchAlbums={fetchAlbums} />;

export default connect((state) => state, { getAllAlbums, fetchAlbums })(AlbumSearchContainer);