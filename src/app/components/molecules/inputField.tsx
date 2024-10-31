import InputComponent from "../atoms/input";
import LabelComponent from "../atoms/label";
import styled from "styled-components";

interface InputFieldProps{
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    focusColor: 'primary' | 'secondary';
    label: string;
}

const StyledInputField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

`;
export default function InputField({ type, onChange, name, value, focusColor, label}: InputFieldProps){
    return(
        <StyledInputField>
            <LabelComponent text={label}/>
            <InputComponent type={type} name={name} value={value} onChange={onChange} focusColor={focusColor} />
        </StyledInputField>
    )
}