import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./style.css";

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

export default class AlbumSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    toggleClass = () => {
        this.setState(prevState => ({ active: !prevState.active }))
    }

    render() {
        return (
            <div className={`search ${this.state.active ? 'search--open' : ''}`}>
                <input type="search"
                    className="search__box"
                    onChange={(event) => this.props.onGetAllAlbums(event.target.value)}
                />
                <span className="search__button" onClick={this.toggleClass}>
                    <span className="search__icon"></span>
                </span>
            </div>
        )
    }
};

AlbumSearch.propTypes = {
    onGetAllAlbums: PropTypes.func.isRequired
};