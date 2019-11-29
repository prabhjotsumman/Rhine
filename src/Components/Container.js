/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Container extends Component {
    render() {
        return (
            <div className="ui two column grid container">
               <div className="two wide left floated column ">Sidebar</div>
               <div className="fourteen column">Products</div>
            </div>
        )
    }
}
