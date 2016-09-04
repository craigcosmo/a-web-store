
import i from 'actionConstant'


export function sortTitle(payload){
	return {
	    type: i.SORT_TITLE,
	    payload: payload
	}
}
export function sortPrice(payload){
	return {
	    type: i.SORT_PRICE,
	    payload: payload
	}
}
