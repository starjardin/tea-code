import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalContext'

export default function ListItem({ contact }) {
	const { dispatch } = useContext(GlobalContext)
	const handleChange = (id) => {
		dispatch({
			type: 'CHECK_CONTACT',
			payload: id,
		})
	}
	return (
		<ListStyles>
			<ContactInfoStyles>
				<AvatarContainer>
					{contact.avatar ? (
						<img src={contact.avatar} alt={contact.first_name} />
					) : (
						<div>
							<span>{contact.first_name.charAt(0)}</span>
							<span>{contact.last_name.charAt(0)}</span>
						</div>
					)}
				</AvatarContainer>
				<div>
					<span>{contact.first_name}</span>
					<span>{contact.last_name}</span>
					<Paragraph>{contact.email}</Paragraph>
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

const AvatarContainer = styled.div`
	border-radius: 50%;
	border: solid 1px #cccccc;
`
const Paragraph = styled.p`
	margin: 0;
`
