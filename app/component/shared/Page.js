import React from 'react'
import {PropTypes} from 'react'
import 'normalize.scss'
import 'main.scss'
import 'responsive.scss'
import 'fontAwesome.css'

export default class Page extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div class="page">
			{React.cloneElement(this.props.children, {...this.props})}
			</div>
		)
	}
}

