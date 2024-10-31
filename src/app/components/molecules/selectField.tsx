import SelectComponent from "../atoms/select";
import LabelComponent from "../atoms/label";
import styled from "styled-components";

interface SelectFieldProps{
    name: string;
    options: {value: string, label: string}[],
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder: string;
    focusColor: 'primary' | 'secondary';
    label: string;
}

const StyledInputField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

`;
export default function SelectField({ name, options, value, placeholder, onChange, focusColor, label}: SelectFieldProps){
    return(
        <StyledInputField>
            <LabelComponent text={label}/>
            <SelectComponent focusColor={focusColor} value={value} onChange={onChange} name={name} options={options} placeholder={placeholder} />
        </StyledInputField>
    )
}