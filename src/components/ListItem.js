import React from 'react'
import styled from 'styled-components'

export default function ListItem({ contact, contactsWithCheckedProp }) {
	const handleChange = (id) => {
		const element = contactsWithCheckedProp.find((el) => el.id === id)
		console.log(element)
		return {
			...element,
			isChecked: true,
		}
	}
	return (
		<ListStyles>
			<ContactInfoStyles>
				<div>
					{contact.avatar ? (
						<img src={contact.avatar} alt={contact.first_name} />
					) : (
						<div>
							<span>{contact.first_name.charAt(0)}</span>
							<span>{contact.last_name.charAt(0)}</span>
						</div>
					)}
				</div>
				<div>
					<span>{contact.first_name}</span>
					<span>{contact.last_name}</span>
					<p>{contact.email}</p>
				</div>
			</ContactInfoStyles>
			<input
				type='checkbox'
				checked={contact.isChecked}
				onChange={() => handleChange(contact.id)}
			/>
		</ListStyles>
	)
}

const ListStyles = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ContactInfoStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
