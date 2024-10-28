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
`;


export default function layoutComponent({ children }: LayoutProps) {
    return (
        <>
            <Title />
            <Layout>{children}</Layout>
        </>
    )
}
