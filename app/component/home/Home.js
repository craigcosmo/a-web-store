import React from 'react'

import 'home.scss'
import HomeGrid from 'HomeGrid'
import HomeViewControl from 'HomeViewControl'

export default class Home extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div class="home">
				<main>
					<HomeViewControl {...this.props} />
					<HomeGrid {...this.props} />
				</main>
			</div>
		)
	}
}
