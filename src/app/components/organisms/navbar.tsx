import { FaBuilding, FaSuitcase } from "react-icons/fa";
import styled from "styled-components";
import SwitchComponent from "../atoms/switch";
import { SearchComponent } from "../atoms/search";


const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
`;
export function NavbarComponent() {

    const handleSwitchChange = (selectedIndex: number) => {
        console.log('Switch changed to:', selectedIndex);
      };

    return (
        <StyledNavbar>
            <SwitchComponent
                options={[
                    { label: 'Vacantes', icon: <FaSuitcase /> },
                    { label: 'Compañías', icon: <FaBuilding /> },
                ]}
                onChange={handleSwitchChange}
            />
            <SearchComponent/>
        </StyledNavbar>
    );
}