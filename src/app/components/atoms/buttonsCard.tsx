import styled from "styled-components";
import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";

interface IButtonsCardProps{
    onClickEdit: (e: React.FormEvent) => void;
    onClickDelete: (e: React.FormEvent) => void;
    color: 'primary' | 'secondary';
    hoverColor: 'primary' | 'secondary';
};

const colors = {
    primary: 'rgb(168, 85, 247)',
    secondary: 'rgb(236, 72, 153)',
};
const hoverColors = {
    primary: 'rgb(147, 51, 234)',
    secondary: 'rgb(219, 39, 119)',
};

const StylesButtonsCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 35px;
`;

const ButtonEdit = styled.button<{ color: 'primary' | 'secondary', hoverColor: 'primary' | 'secondary' }>`
    font-size: 20px;
    background-color: transparent;
    color: ${(props) => colors[props.color]};
    border: solid rgb(229, 231, 235) 1px;
    border-radius: 3px;
    padding: 5px 5px;
    margin-right: 5px;
    &:hover {
        color: ${(props) => hoverColors[props.hoverColor]};
        background-color: rgb(243, 244, 246);
    }
`;

const ButtonDelete = styled.button`
    font-size: 20px;
    background-color: transparent;
    color: rgb(239, 68, 68);
    border: solid rgb(229, 231, 235) 1px;
    border-radius: 3px;
    padding: 5px 5px;
    margin-right: 10px;
    &:hover {
        background-color: rgb(254, 242, 242);
        color: rgb(220, 38, 38);
    }
`;

export default function ButtonsCard({onClickEdit, onClickDelete, color, hoverColor}: IButtonsCardProps ){
    return(
        <StylesButtonsCard>
            <ButtonEdit onClick={onClickEdit} color={color} hoverColor={hoverColor}><GoPencil /></ButtonEdit>
            <ButtonDelete onClick={onClickDelete}><GoTrash /></ButtonDelete>
        </StylesButtonsCard>
    );
}