import React from 'react'
import Modal from 'react-modal'
import product from 'product.json'
import 'tooltip.scss'
import ReactTooltip from 'react-tooltip'
import 'tooltipContent.scss'
import 'modal.scss'
import 'itemModal.scss'

export default class HomeGrid extends React.Component {
	constructor(props) {
		super(props)
		this.renderProduct = this.renderProduct.bind(this)
		this.renderStar = this.renderStar.bind(this)
		this.renderSize =this.renderSize.bind(this)
		this.renderInfo =this.renderInfo.bind(this)
		this.openDetailModal = this.openDetailModal.bind(this)
		this.renderContent = this.renderContent.bind(this)
		this.renderTooltip = this.renderTooltip.bind(this)
		this.disableTooltip = this.disableTooltip.bind(this)
		this.handleWindowResize = this.handleWindowResize.bind(this)

		console.log(props)
		this.state = {item : null}
		this.product = this.props.home.data
	}
	componentDidMount(){
		this.disableTooltip()
		this.handleWindowResize()
	}
	renderStar(){
		return (
			<div>
				<i class="fa fa-star" aria-hidden="true"></i>
				<i class="fa fa-star" aria-hidden="true"></i>
				<i class="fa fa-star" aria-hidden="true"></i>
				<i class="fa fa-star" aria-hidden="true"></i>
				<i class="fa fa-star" aria-hidden="true"></i>
			</div>
		)
	}
	renderSize(item){
		return(
			<div class="size">
				<div class="uc">available sizes</div>
				<div>{item.size.join(' ')}</div>
			</div>
		)
	}
	renderInfo(item){
		return (
			<div>
				<div class="tool-title">{item.title}</div>
				<div class="tool-price">{item.price + ' kr'}</div>
				<div class="uc brand">{item.brand}</div>
			</div>
		)
	}
	renderModal(){
		// if (!this.state.detailModal) {
		//   return null;
		// }
		let item = this.state.item

		return this.renderContent(item)
	}
	renderTooltip(item){
		return this.renderContent(item)
	}
	renderContent(item){
		return(
			<div>
				<section>
					<div class="img-wrapper" data-tip data-for={item.id} data-event="mouseover" >
						<img src={'image/'+item.images[0].url} />
					</div>
					{this.renderSize(item)}
				</section>
				<div class="rating">
					<div class="tool-star">
						{this.renderStar()}
					</div>
				</div>
				{this.renderInfo(item)}
			</div>
		)
	}
	handleWindowResize(){
		window.addEventListener('resize', () => {
			this.disableTooltip()
		}, false)
	}
	handleImageClick(item,e){
		// only enable modal when screen size is smaller than 640
		if (window.innerWidth <= 640) {
			console.log('a')
			this.setState({
				detailModal: true,
				item: item
			})
		}
	}
	disableTooltip(){
		// console.log('aaa')
		// select all tooltip
		let array = [].slice.call(document.querySelectorAll('.__react_component_tooltip'))


		// for screen size smaller than 640, disable tooltip
		if (window.innerWidth <= 640) {

			let array = [].slice.call(document.querySelectorAll('.__react_component_tooltip'))
			array.map(i => i.style.display= 'none')
		}else{
			let array = [].slice.call(document.querySelectorAll('.__react_component_tooltip'))
			array.map(i => i.style.display= 'inherit')
		}
	}
	closeDetailModal() {
		this.setState({
			detailModal: false
		})
	}
	openDetailModal() {
		this.setState({
			detailModal: true
		})
	}
	renderProduct(){
		return this.props.home.data.map( item => 
			(
			<div class="item" key={item.id}>
				<div class="img-wrapper" data-tip data-for={'i'+item.id}>
					<img src={'image/'+item.images[0].url} onClick={this.handleImageClick.bind(this,item)} />
				</div>
				<div class="title l b">{item.title}</div>
				<div class="price l b">{item.price}</div>
				<div class="rating l">
					<div class="star ib">
						{this.renderStar()}
					</div>
					<div class="star-count ib">(0)</div>
				</div>
				
				<div class="l btns">
					<button class="heart-btn">
						<i class="fa fa-heart" aria-hidden="true"></i>
					</button>
					<button class="document-btn">
						<i class="fa fa-file-o" aria-hidden="true"></i>
					</button>
				</div>
				<ReactTooltip id={'i'+item.id} aria-haspopup="true" role="example" data-class="tool">
					{this.renderTooltip(item)}
				</ReactTooltip>
				
			</div>
			)
		)
	}
	render() {
		return (
			<div class="grid">
				{this.renderProduct()}
				<Modal
					overlayClassName="detail-modal-overlay"
					className="detail-modal"
					isOpen={this.state.detailModal}
					onRequestClose={this.closeDetailModal.bind(this)}>
					{  this.state.item ? this.renderContent(this.state.item) : null }
				</Modal>
			</div>	
		)
	}
}
