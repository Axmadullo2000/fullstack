export const setItem = (key, data) => {
	try {
		return localStorage.setItem(key, data)
	} catch (error) {
		console.log('Error saving data')
	}
}

export const getItem = token => {
	try {
		return localStorage.getItem(token)
	} catch (error) {}
}
