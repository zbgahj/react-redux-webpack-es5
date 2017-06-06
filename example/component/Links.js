/**
 * Created by hujiong on 17-6-2.
 */
import React from 'react'

let Links = React.createClass({
    render() {
        return (
            <li><a href={this.props.url} target='_blank'>{this.props.title}</a></li>
        )
    }
})

export default Links;