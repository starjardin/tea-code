import { useEffect, useReducer, createContext } from 'react'

import { endpoint } from '../constant/index'

const initialState = {
	contacts: [],
	isLoading: true,
}
export const GlobalContext = createContext(initialState)

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_DATA': {
			return {
				...state,
				isLoading: false,
				contacts: action.payload.map((el) => {
					return {
						...el,
						isChecked: false,
					}
				}),
			}
		}

		case 'CHECK_CONTACT': {
			return {
				...state,
				contacts: state.contacts.map((el) => {
					if (el.id === action.payload) {
						return {
							...el,
							isChecked: !el.isChecked,
						}
					}
					return el
				}),
			}
		}

		default:
			return state
	}
}

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const fetchData = async () => {
		const response = await fetch(endpoint)

		const data = await response.json()

		dispatch({
			type: 'FETCH_DATA',
			payload: data,
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	)
}
