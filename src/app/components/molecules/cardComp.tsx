import ButtonsCard from "../atoms/buttonsCard";
import InfoCardComp from "../atoms/infoCardComp";
import { ICompany } from "@/app/models/modelsProgram/program.model";
import styled from "styled-components";

interface ICardProps{
    company: ICompany;
    onClickEdit: (company: ICompany) => void;
    onClickDelete: (e: React.FormEvent) => void;
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 180px;
    padding: 15px;
    border: solid rgb(229, 231, 235) 1px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function CardCompComponents({company, onClickEdit, onClickDelete}: ICardProps ){
    return(
        <Card>
            <InfoCardComp title={company.name} location={company.location} contact={company.contact}/>
            <ButtonsCard onClickEdit={() => onClickEdit(company)} onClickDelete={onClickDelete} color="primary" hoverColor="primary"/>
        </Card>
    )
};