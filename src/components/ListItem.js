import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalContext'

export default function ListItem({ contact }) {
	const { dispatch } = useContext(GlobalContext)
	const handleClickCheckbox = (id) => {
		dispatch({
			type: 'CHECK_CONTACT',
			payload: id,
		})
	}
	const handleChangeCheckbox = (id) => {
		dispatch({
			type: 'CHECK_CONTACT',
			payload: id,
		})
	}
	return (
		<ListStyles onClick={() => handleClickCheckbox(contact.id)}>
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
					<ContactNameStyles>{contact.first_name}</ContactNameStyles>
					<ContactNameStyles>{contact.last_name}</ContactNameStyles>
					<Paragraph>{contact.email}</Paragraph>
				</div>
			</ContactInfoStyles>
			<input
				type='checkbox'
				checked={contact.isChecked}
				onChange={() => handleChangeCheckbox(contact.id)}
			/>
		</ListStyles>
	)
}

const ListStyles = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: solid 1px #ccc;
`

const ContactInfoStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5%;
`

const AvatarContainer = styled.div`
	border-radius: 50%;
	border: solid 1px #cccccc;
	width: 50px;
	height: 50px;
`
const Paragraph = styled.p`
	margin: 0;
`
const ContactNameStyles = styled.span`
	text-transform: capitalize;
	margin: 0 0.3rem;
`
