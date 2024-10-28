import styled from "styled-components"
import { CgAdd } from "react-icons/cg";

interface IButtonAddProps {
    label: string;
    onClick: (e: React.FormEvent) => void;
    color: 'primary' | 'secondary';
    hoverColor: 'primary' | 'secondary';
}

const colors = {
    primary: 'rgb(168, 85, 247)',
    secondary: 'rgb(236, 72, 153)',
};

const hoverColors = {
    primary: 'rgb(147, 51, 234)',
    secondary: 'rgb(219, 39, 119)',
};

const StyledButton = styled.button<{ color: 'primary' | 'secondary', hoverColor: 'primary' | 'secondary' }>`
background-color: ${(props) => colors[props.color]};
color: white;
display: flex;
align-items: center;
gap: 10px;
font-size: 12px;
border-radius: 20px;
padding: 6px 20px;
&:hover {
    background-color: ${(props) => hoverColors[props.hoverColor]};
}
`;

const CircleButton = styled.div`
    font-size: 12px;
`;

export default function AddButton({ label, onClick, color, hoverColor }: IButtonAddProps): React.ReactElement {
    return (
        <StyledButton onClick={onClick} color={color} hoverColor={hoverColor}>
            <CircleButton>
                <CgAdd />
            </CircleButton>
            {label}
        </StyledButton>
    )
}