import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5rem;
  color:  rgb(31, 41, 55);
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  padding-top: 20px;
  `;

export default function TitleComponent() {
  return (
    <Title>Panel de Administracion</Title>
  )
}
