import i from 'actionConstant'
import data from 'product'
import R from 'ramda'




const defaultState= {
	data: sortPrice(data)
}

function sortTitle(payload) {
	let sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('title')));
	payload = sortByNameCaseInsensitive(payload)

	return payload
}
function sortPrice(payload){
	let sortByNameCaseInsensitive = R.sortBy( R.prop('price'));
	payload = sortByNameCaseInsensitive(payload)
	return payload
}

export default (state = defaultState, action) => {
	switch(action.type){
		case i.SORT_TITLE:
		return {...state, data : sortTitle(action.payload)}
		case i.SORT_PRICE:
		return {...state, data: sortPrice(action.payload)}
	}
	return state
}
