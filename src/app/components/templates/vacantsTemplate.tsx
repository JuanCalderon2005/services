'use client'
import styled from "styled-components";
import HeaderPage from "../organisms/headerPage";

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

    // const [ModalOpenVac, setModalOpenVac] = useState(false);

    const toggleModalVac = () => {
        console.log("toggleModalVac");
    };

    return (
        <Vacants>
            <HeaderPage label="Agregar Vacante" onClick={toggleModalVac} color="primary" hoverColor="primary" title="Vacantes" />
        </Vacants>
    )
}