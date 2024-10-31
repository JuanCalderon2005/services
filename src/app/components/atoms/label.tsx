import React from "react";
import styled from "styled-components";

interface ILabelProps{
    text: string;
}
const StyledLabel = styled.label`
    color: rgb(75, 85, 99);
    background-color: rgb(255, 255, 255);
`;
export default function LabelComponent({text}: ILabelProps) {
    return(
        <StyledLabel>
            {text}
        </StyledLabel>
    )
}