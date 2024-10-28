'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid rgb(229, 231, 235);
  border-radius: 30px;
  padding: 3px 10px;
  width: fit-content;
  background-color: rgb(255, 255, 255);
`;

const SearchInput = styled.input`
  font-size: 12px;
  border: none;
  outline: none;
  padding: 2px;
  border-radius: 30px;
  width: 160px;
  margin-right: 10px;

  &::placeholder {
    color: rgb(107, 114, 128);
  }
`;

const IconContainer = styled.div`
  font-size: 12px;
  cursor: pointer;
  color: rgb(107, 114, 128);
`;


export function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <SearchContainer>
            <IconContainer>
                <FaSearch />
            </IconContainer>
            <SearchInput
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </SearchContainer>
    );
}