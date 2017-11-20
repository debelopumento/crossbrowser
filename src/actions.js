import axios from 'axios'

export const incrementCounter = () => ({
	type: 'INCREMENT',
	payload: null,
})

export const fetchUsers = () => async dispatch => {
	const res = await axios.get('https://react-ssr-api.herokuapp.com/users')
	dispatch({
		type: 'UPDATE_USERS',
		payload: res.data,
	})
}
