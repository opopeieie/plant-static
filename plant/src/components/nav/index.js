import React, { Component } from 'react'


export default class Navbar extends Component {
    componentWillMount () {

    }

    render () {

        return (
            <header id="luxbar" className="luxbar-fixed">
                <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox"/>
                <div className="luxbar-menu luxbar-menu-right luxbar-menu-dark">
                    <ul className="luxbar-navigation">
                        <li className="luxbar-header">
                            <a href="#" className="luxbar-brand">LUXBAR</a>
                            <label className="luxbar-hamburger luxbar-hamburger-spin"
                                   id="luxbar-hamburger" htmlFor="luxbar-checkbox"> <span></span> </label>
                        </li>
                        <li className="luxbar-item"><a href="#">1</a></li>
                        <li className="luxbar-item"><a href="#">2</a></li>
                        <li className="luxbar-item"><a href="#">3</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
