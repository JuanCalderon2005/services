'use client'
// import { useState } from "react";
import styled from "styled-components";
import HeaderPage from "../organisms/headerPage";

const Companies = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: auto;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
`;
export default function CompaniesTemplate() {

    // const [ModalOpenEmp, setModalOpenEmp] = useState(false);

    const toggleModalEmp = () => {
        console.log("toggleModalEmp");
    }

    return (
        <Companies>
            <HeaderPage label="Agregar Compañia" onClick={toggleModalEmp} color="secondary" hoverColor="secondary" title="Compañias" />
        </Companies>
    )
}