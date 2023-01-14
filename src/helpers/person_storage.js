export const setItem = (key, value) => {
	try {
		localStorage.setItem(key, value)
	} catch (error) {
		console.log('Error saving data')
	}
}

export const getItem = key => {
	try {
		const token = localStorage.getItem(key)
		return token
	} catch (error) {
		console.log(error)
	}
}

export const removeItem = key => {
	try {
		const token = localStorage.removeItem(key)
		return token
	} catch (error) {
		console.log(error)
	}
}
