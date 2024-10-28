'use client';

import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/title/title';

interface LayoutProps {
    children: React.ReactNode
}

const Layout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
width: 80%;
height: 90vh;
border-radius: 10px;
`;


export default function layoutComponent({ children }: LayoutProps) {
    return (
        <>
            <Layout>
                <Title />
                {children}
            </Layout>
        </>
    )
}
