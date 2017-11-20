import { combineReducers } from 'redux'

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT': {
			return state++
		}
		case 'DECREMENT': {
			return state--
		}
		default:
			return state
	}
}

const reducerCollection = {
	counter: counterReducer,
}

const allReducers = combineReducers(reducerCollection)

export default allReducers
