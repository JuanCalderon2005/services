'use client';

import React from 'react';
import styled from 'styled-components';
import { NavbarComponent } from '../organisms/navbar';
import TitleComponent from '../atoms/title';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 95%;
    max-width: 1200px;
    height: 100vh;
    min-height: 90vh;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 95%;
        padding: 15px;
        gap: 15px;
    }

    @media (max-width: 480px) {
        width: 100%;
        border-radius: 0;
        padding: 10px;
        gap: 10px;
    }
`;

export default function LayoutComponent({ children }: LayoutProps) {
    return (
        <>
            <Layout>
                <TitleComponent />
                <NavbarComponent />
                {children}
            </Layout>
        </>
    );
}
