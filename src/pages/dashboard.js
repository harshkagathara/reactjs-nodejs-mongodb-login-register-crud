import React, { Component } from 'react';

import { Link, Redirect } from "react-router-dom";


export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.handleClickLogout = this.handleClickLogout.bind(this)
    }

    state = {
        toDashboard: false,
    };

    handleClickLogout() {
        localStorage.removeItem('token');
        localStorage.setItem('isLoggedIn', false);
        this.setState({ toDashboard: true });
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h1>Wel Come</h1>
                <Link to={'#'} onClick={this.handleClickLogout}>Logout</Link>
            </div>

        );
    }
}
