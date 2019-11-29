/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="ui red vertical demo sidebar menu visible">
                <a className="item">
                    <i className="home icon"></i>
                    Home</a>
                <a className="active item">
                    <i className="heart icon"></i>
                    Current Section</a>
                <a className="item">
                    <i className="facebook icon"></i>
                    Like us on Facebook</a>
                <div className="item">
                    <b>More</b>
                    <div className="menu">
                        <a className="item">About</a>
                        <a className="item">Contact Us</a>
                    </div>
                </div>
            </div>
        )
    }
}