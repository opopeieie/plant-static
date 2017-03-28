import React, { Component } from 'react'

export default class NotFound extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired,
        bbb:'213'
    }

    componentWillMount() {
        alert('404 NOT FOUND')
        this.context.router.replace('/')
        console.log('tesetBranch');
    }

    render () {
        // 非实体组件需显式返回 null
        return null
    }
}