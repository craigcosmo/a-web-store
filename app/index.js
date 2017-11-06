import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory } from 'react-router'
import {Provider} from 'react-redux'
import Container from './component/shared/Container'
import store from './store/store'
import Home from './component/home/Home'
import Select from './component/Select'

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
