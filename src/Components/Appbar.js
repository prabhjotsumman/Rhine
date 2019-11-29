/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';

export default class Appbar extends Component{
    render(){
        return(
            <div className="ui stackable menu">
                <a className="active item">Home</a>
                <a className="item">About</a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="search.."/>
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <div class="item">
                        <div class="ui primary button">Sign Up</div>
                    </div>
                    <div class="item">
                        <div class="ui positive button">Login</div>
                    </div>
                </div>
            </div>
        )
    }
}
