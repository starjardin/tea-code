import { useContext, useState } from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import ListItem from './components/ListItem'
import { GlobalContext } from './context/GlobalContext'

export default function App() {
	const [searchValue, setSearchValue] = useState('')
	const {
		state: { contacts, isLoading },
	} = useContext(GlobalContext)

	const handleChange = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<div>
			<Header />
			{isLoading ? (
				'LisLoading....'
			) : (
				<div>
					<InputStyles type='text' onChange={(e) => handleChange(e)} />
					{contacts
						.filter((contact) => {
							const name = (contact.first_name + contact.last_name)
								.toLowerCase()
								.trim()
							return name.includes(searchValue.toLowerCase().trim())
						})
						.sort((a, b) => a.last_name.localeCompare(b.last_name))
						.map((contact) => (
							<ul key={contact.id}>
								<ListItem contact={contact} />
							</ul>
						))}
				</div>
			)}
		</div>
	)
}

const InputStyles = styled.input`
	display: block;
	width: 100%;
`
