import styled from "styled-components";

interface IselectProps{
    name: string;
    options: {value: string, label: string}[],
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder: string;
    focusColor: 'primary' | 'secondary';
}

const colors = {
    primary: 'rgb(233, 213, 255)',
    secondary: 'rgb(251, 207, 232)',
};

const StyledSelect = styled.select<{ focusColor: 'primary' | 'secondary' }>`
    color: rgb(75, 85, 99);
    width: 100%;
    background-color: rgb(255, 255, 255);
    border: solid 2px rgb(229, 231, 235);
    border-radius: 5px;
    padding: 5px;

    // Cambio del borde en focus
    &:focus {
        border-color: ${(props) => colors[props.focusColor]};
        outline: 3px solid rgb(229, 231, 235);
    }
`;
export default function SelectComponent({name, options, value, placeholder, onChange, focusColor}: IselectProps){
    return(
        <StyledSelect focusColor={focusColor} value={value} onChange={onChange} name={name}>
            <option value="">{placeholder}</option>
            {options.map(({value, label}) => (
                <option key={value} value={value}>{label}</option>
            ))}
        </StyledSelect>
    );
};