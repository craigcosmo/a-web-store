import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory } from 'react-router'
import {Provider} from 'react-redux'
import Container from 'Container'
import store from 'store'
import Home from 'Home'
import Select from 'Select'

const app = document.getElementById('app');
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Container}>
				<IndexRoute component={Home} />
				<Route path="select" component={Select} />
			</Route>
		</Router>
	</Provider>, app);
