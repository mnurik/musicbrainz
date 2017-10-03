import React, { Component } from 'react';

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

    handleInputChange = ({ target }) => {
        this.props.currentAlbumUpdate(target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getAllAlbums(this.props.currentAlbum);
    }

    toggleClass = () => {
        this.setState(prevState => ({ active: !prevState.active }))
    }

    render() {
        const { currentAlbum, errorMessage } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className={`search ${this.state.active ? 'open' : ''}`}>
                    <input type="search" className="search-box" value={currentAlbum} onChange={this.handleInputChange} />
                    <span className="search-button" onClick={this.toggleClass}>
                        <span className="search-icon"></span>
                    </span>
                </form>
                {errorMessage ? <span className="error-message">{errorMessage.message}</span> : null}
            </div>
        )
    }
};