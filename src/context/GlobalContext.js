import { useEffect, useReducer, createContext } from 'react'

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
				contacts: action.payload,
			}
		}

		default:
			return state
	}
}

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const fetchData = async () => {
		const response = await fetch(
			'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'
		)

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
