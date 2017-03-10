import React, { Component } from 'react'


export default class Navbar extends Component {
    componentWillMount () {

    }

    render () {

        return (
            <nav>
                <a href="/html/">HTML</a> |
                <a href="/css/">CSS</a> |
                <a href="/js/">JavaScript</a> |
                <a href="/jquery/">jQuery</a>
            </nav>
        )
    }
}
