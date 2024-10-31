'use client'
import styled from "styled-components";
import HeaderPage from "../organisms/headerPage";
import { useState } from "react";
import Modal from "../atoms/modal";
import FormVac from "../molecules/formVac";

const Vacants = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: auto;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
`;
export default function VacantsTemplate() {

    const [ModalOpenVac, setModalOpenVac] = useState(false);

    const toggleModalVac = () => {
        setModalOpenVac(!ModalOpenVac);
    };

    return (
        <Vacants>
            <HeaderPage label="Agregar Vacante" onClick={toggleModalVac} color="primary" hoverColor="primary" title="Vacantes" />
            <Modal isOpen={ModalOpenVac} onClose={toggleModalVac} title="Agregar Vacante">
                <FormVac onClose={toggleModalVac} />
            </Modal>
        </Vacants>
    )
}