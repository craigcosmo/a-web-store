import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import 'selectCustom.scss'

export default class HomeViewControl extends React.Component {
	constructor(props) {
		super(props)

		this.state ={
			selected: 'price'
		}
		this.fixViewControlPosition = this.fixViewControlPosition.bind(this)
		this.selectChange = this.selectChange.bind(this)
		this.data = this.props.home.data
	}
	selectChange(val){
		this.setState({
			selected: val
		})
		console.log(val)
		if (val.value === 'title') {
			// console.log('mama') 
			this.props.sortTitle(this.data)
		}
		if (val.value === 'price') {
			this.props.sortPrice(this.data)
		}
		
	}

	componentDidMount(){
		this.fixViewControlPosition()
	}
	fixViewControlPosition(){
		let top1= document.getElementById('top1')
		let top1Height = top1.offsetHeight
		// let widthOfWrapper = document.getElementById('')
		window.addEventListener("scroll", function(e) {
			
			// console.log(top1Height)
			var top = this.scrollY || document.documentElement.scrollTop
			if (top >= 15) {
				top1.classList.add('fixed')
				top1.parentNode.style.paddingTop = top1Height + 'px'
			} else {
				top1.classList.remove('fixed')
				top1.parentNode.style.paddingTop = 0 + 'px'
			}
		}, false)
	}
	logChange(val) {
		console.log("Selected: " + val)
	}
	render() {

		const options = [
			{ value: 'price', label: 'Price' },
			{ value: 'title', label: 'Title' }
		]
		return (
			<div class="view-control-wrapper">
				<div class="view-control" id="top1">
					<div class="left">
						<span class="cap ib vam">sorting:</span>
						<Select
							name="sort"
							clearable = {false}
							value={this.state.selected}
							options={options}
							onChange={this.selectChange}
							backspaceRemoves={false}
						/>
					</div>
					<div class="right">
						<span class="fc">Image size</span>
						<button>
							<i class="fa fa-th" aria-hidden="true"></i>
						</button>
						<button>
							<i class="fa fa-th-large" aria-hidden="true"></i>
						</button>
					</div>
				</div>	
			</div>
			
		)
	}
}
