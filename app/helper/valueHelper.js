export function getTrueDecimal (value){
	if (value && value.indexOf('.') !== -1) {
		let ar = value.split('.')
		if (ar[1] && Number(ar[1] >0)) {
			return value
		}else{
			return ar[0]
		}
	}else{
		return value
	}
}

export function isValidEmail(email){
	let re = /\S+@\S+\.\S+/

	if(email && re.test(email)){
		return true
	}else{
		return false
	}
}

export function isDigitOnly(val){
	return /^\d+$/.test(val)
}
