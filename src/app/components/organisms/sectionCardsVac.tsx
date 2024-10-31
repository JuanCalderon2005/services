'use client'
import ButtonPag from "../atoms/buttonPagination";
import Modal from "../atoms/modal";
import CardVacComponents from "../molecules/cardVac";
import FormVac from "../molecules/formVac";
import { IPageable, IVacancy, IVacancyResponse } from "@/app/models/modelsProgram/program.model";
import { Service } from "@/app/services/coders.service";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

interface CardProps {
    data: IVacancyResponse;
    pagination: IPageable;
}

const SectionVac = styled.div`
    width: 100%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

const Pagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const useServices = new Service();
export default function SectionCardCav({ data, pagination }: CardProps) {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [ModalOpenEmp, setModalOpenEmp] = useState(false);

    const toggleModalEmp = () => {
        setModalOpenEmp(!ModalOpenEmp);
        if (ModalOpenEmp) {
            setVacancySelected(undefined);
        }
    }
    const [vacancieSelected, setVacancySelected] = useState<IVacancy>();

    const HandleClickNext = (nextPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (nextPage <= data.totalPages) {
            params.set('page', nextPage.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const HandleClickBack = (backPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (backPage > 0) {
            params.set('page', backPage.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const handleEdit = (vacant: IVacancy) => {
        setVacancySelected(vacant);
        toggleModalEmp();
    };

    const handleDelete = async (id: string) => {
        try {
            await useServices.deleteVacant(id);
            alert('Compania eliminada correctamente');
            router.refresh();
        } catch (error) {
            console.error('Error eliminando compania:', error);
        }
    };

    const courrentPage = pagination.pageNumber + 1;

    return (
        <SectionVac>
            <Cards>
                {data.content.map((vacant) => (
                    <CardVacComponents
                        key={vacant.id}
                        vacant={vacant}
                        onClickEdit={handleEdit}
                        onClickDelete={()=>handleDelete(vacant.id)}
                    />
                ))}
            </Cards>
            <Pagination>
                <ButtonPag label="<" onClick={() => HandleClickBack(courrentPage - 1)} />
                Página {courrentPage} de {data.totalPages}
                <ButtonPag label=">" onClick={() => HandleClickNext(courrentPage + 1)} />
            </Pagination>
            <Modal isOpen={ModalOpenEmp} onClose={toggleModalEmp} title="Editar Compañia">
                <FormVac onClose={toggleModalEmp} initialData={vacancieSelected} />
            </Modal>
        </SectionVac>
    );
}