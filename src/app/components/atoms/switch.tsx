'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styled from 'styled-components';

interface SwitchProps {
  options: { label: string; icon: React.ReactNode }[];
  onChange: (selectedIndex: number) => void;
}

const SwitchContainer = styled.div`
  display: flex;
  background-color: rgb(243, 244, 246);
  border-radius: 30px;
  width: fit-content;
`;

const SwitchButton = styled.button<{ isActive: boolean; isLeft: boolean }>`
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 6px 18px;
  background-color: ${({ isActive, isLeft }) => {
    if (isActive && isLeft) return 'rgb(168, 85, 247)'; 
    if (isActive && !isLeft) return 'rgb(236, 72, 153)'; 
    return 'transparent';
  }};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'rgb(255, 255, 255)' : 'rgb(107, 114, 128)')};

  svg {
    margin-right: 8px;
    fill: ${({ isActive }) => (isActive ? 'rgb(255, 255, 255)' : 'rgb(107, 114, 128)')};
  }
`;

export default function SwitchComponent({ options, onChange }: SwitchProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    onChange(index);
  };

  if(selectedIndex === 0){
    router.push('/');
  } else if(selectedIndex === 1){
    router.push('/companies');
  }
  
  return (
    <SwitchContainer>
      {options.map((option, index) => (
        <SwitchButton
          key={index}
          isActive={index === selectedIndex}
          isLeft={index === 0} 
          onClick={() => handleClick(index)}
        >
          {option.icon}
          {option.label}
        </SwitchButton>
      ))}
    </SwitchContainer>
  );
}