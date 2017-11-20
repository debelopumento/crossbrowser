import { combineReducers } from 'redux'

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT': {
			return state + 1
		}
		case 'DECREMENT': {
			return state - 1
		}
		default:
			return state
	}
}

const usersReducer = (state = null, action) => {
	switch (action.type) {
		case 'UPDATE_USERS': {
			return action.payload
		}
		default:
			return state
	}
}

const reducerCollection = {
	counter: counterReducer,
	users: usersReducer,
}

const allReducers = combineReducers(reducerCollection)

export default allReducers
