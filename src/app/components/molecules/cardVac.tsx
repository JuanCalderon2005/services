import ButtonsCard from "@/app/components/atoms/buttonsCard";
import InfoCard from "@/app/components/atoms/infoCardVac";
import { IVacancy } from "@/app/models/modelsProgram/program.model";
import styled from "styled-components";

interface ICardProps{
    vacant: IVacancy
    onClickEdit: (vacant: IVacancy) => void;
    onClickDelete: (e: React.FormEvent) => void;
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 190px;
    padding: 10px;
    border: solid rgb(229, 231, 235) 1px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function CardVacComponents({vacant, onClickEdit, onClickDelete}: ICardProps ){
    return(
        <Card>
            <InfoCard title={vacant.title} description={vacant.description} status={vacant.status} company={vacant.company.name}/>
            <ButtonsCard onClickEdit={()=>onClickEdit(vacant)} onClickDelete={onClickDelete} color="primary" hoverColor="primary"/>
        </Card>
    )
};