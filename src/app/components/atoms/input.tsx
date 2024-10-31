import React from 'react';
import styled from 'styled-components';

interface InputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    focusColor: 'primary' | 'secondary';
}

const colors = {
    primary: 'rgb(233, 213, 255)',
    secondary: 'rgb(251, 207, 232)',
};

const StyledInput = styled.input<{ focusColor: 'primary' | 'secondary' }>`
    width: 100%;
    background-color: rgb(255, 255, 255);
    border: solid 2px rgb(229, 231, 235);
    border-radius: 5px;
    padding: 5px;

    // Cambio del borde en focus
    &:focus {
        border-color: ${(props) => colors[props.focusColor]};
        outline: 2px solid rgb(229, 231, 235);
    }
`;


export default function InputComponent({ type, onChange, name, value, focusColor }: InputProps): React.ReactElement {
    return (
        <StyledInput type={type} name={name} value={value} onChange={onChange} focusColor={focusColor} />
    )

}