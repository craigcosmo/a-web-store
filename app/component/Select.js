import React from 'react'
import I from 'react-select'
import 'react-select/dist/react-select.css'


export default class Select extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: 'one'
		}
		this.change = this.change.bind(this)
	}
	change(val) {
		console.log(val)
		this.setState({
			selected: val
		})
	}
	render() {
		const options = [
		    { value: 'one', label: 'One' },
		    { value: 'two', label: 'Two' }
		]
		return (
			<I
			    name="sort"
			    value={this.state.selected}
			    options={options}
			    onChange={this.change}
			/>
		)
	}
}
