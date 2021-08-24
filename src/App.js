import { useContext, useState } from 'react'
import Header from './components/Header'
import ListItem from './components/ListItem'
import { GlobalContext } from './context/GlobalContext'

function App() {
	const [searchValue, setSearchValue] = useState('')
	const {
		state: { contacts, isLoading },
	} = useContext(GlobalContext)

	const contactsWithCheckedProp = contacts.map((contact) => {
		return {
			...contact,
			isChecked: false,
		}
	})

	const handleChange = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<div>
			<Header />
			<input type='text' onChange={(e) => handleChange(e)} />
			{isLoading
				? 'LisLoading....'
				: contactsWithCheckedProp
						.filter((contact) => {
							const name = (contact.first_name + contact.last_name)
								.toLowerCase()
								.trim()
							return name.includes(searchValue.toLowerCase().trim())
						})
						.sort((a, b) => a.last_name.localeCompare(b.last_name))
						.map((contact) => (
							<ul key={contact.id}>
								<ListItem
									contact={contact}
									contactsWithCheckedProp={contactsWithCheckedProp}
								/>
							</ul>
						))}
		</div>
	)
}

export default App
