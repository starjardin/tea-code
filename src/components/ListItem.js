/* eslint-disable react-hooks/exhaustive-deps */
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

	return (
		<ListStyles onClick={() => handleClickCheckbox(contact?.id)}>
			<ContactInfoStyles>
				<AvatarContainer>
					{contact?.avatar ? (
						<ImageStyles src={contact?.avatar} alt={contact?.first_name} />
					) : (
						<NameAvatarStyles>
							<span>{contact?.first_name?.charAt(0)}</span>
							<span>{contact?.last_name?.charAt(0)}</span>
						</NameAvatarStyles>
					)}
				</AvatarContainer>
				<div>
					<ContactNameStyles>{contact?.first_name}</ContactNameStyles>
					<ContactNameStyles>{contact?.last_name}</ContactNameStyles>
					<Paragraph>{contact?.email}</Paragraph>
				</div>
			</ContactInfoStyles>
			<input type='checkbox' checked={contact?.isChecked} onChange={() => {}} />
		</ListStyles>
	)
}

const ListStyles = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: solid 1px #ccc;
	padding: 5px 0;
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
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	color: #dcdcdc;
	padding: 0.2rem;
`
const Paragraph = styled.p`
	margin: 0;
	color: #b2b2b2;
	font-size: large.8rem;
`
const ContactNameStyles = styled.span`
	text-transform: capitalize;
	margin: 0 0.3rem 0 0;
	color: #303030;
	font-weight: 800;
	font-size: 1.5rem;
`
const ImageStyles = styled.img`
	width: 100%;
	height: 100%;
`
const NameAvatarStyles = styled.div`
	background-color: #ffffff;
`
