import React, { Component } from 'react';
import { Debounce } from 'react-throttle';

import "./AlbumSearch.css";

/**
 * Search for Albums.
 *
 * @description Search album from MusicBrainz api.
 * In this component i used Debounce for big expensive AJAX call.
 * @prop fetchAlbums -> dispatch an action for getting all albums from MusicBrainz.
 * @prop getAllAlbums -> dispatch an action for getting albums from local db.
 * @method getData -> when user input some text inside input this method will be called.
 * @method toggleClass -> As jquery toggleClass, toggles class when user click on search-button.
 */

export class AlbumSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    getData = ({ target }) => {
        let value = target.value || "\'\'";
        this.props.currentAlbum(value);
    }

    toggleClass = () => {
        this.setState(prevState => ({ active: !prevState.active }))
    }

    render() {
        return (
            <div>
                <div className={`search ${this.state.active ? 'open' : ''}`}>
                    <Debounce time="600" handler="onChange">
                        <input type="search" className="search-box" onChange={this.getData} />
                    </Debounce>
                    <span className="search-button" onClick={this.toggleClass}>
                        <span className="search-icon"></span>
                    </span>
                </div>
                <span className="error-message">{this.props.children}</span>
            </div>
        )
    }
};