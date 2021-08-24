import React from 'react'
import styled from 'styled-components'
export default function Header() {
	return <HeaderStyles>Contacts</HeaderStyles>
}

const HeaderStyles = styled.h2`
	width: 100%;
	text-align: center;
	background-color: #39a89f;
	margin: 0;
	color: #c5f0f1;
	padding: 20px 0;
`
