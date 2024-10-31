import styled from "styled-components";

interface IButtonProps {
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
    border-radius: 5px;
    padding: 8px 16px;
    &:hover {
        background-color: ${(props) => hoverColors[props.hoverColor]};
    }
`;

export default function ButtonComponent({ label, onClick, color, hoverColor }: IButtonProps): React.ReactElement {
    return (
        <StyledButton onClick={onClick} color={color} hoverColor={hoverColor}>
            {label}
        </StyledButton>
    );
}