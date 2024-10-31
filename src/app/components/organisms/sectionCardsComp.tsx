'use client'
import ButtonPag from "../atoms/buttonPagination";
import Modal from "../atoms/modal";
import CardCompComponents from "../molecules/cardComp";
import FormEmp from "../molecules/formEmp";
import { ICompanies, ICompany, IPageable } from "@/app/models/modelsProgram/program.model";
import { Service } from "@/app/services/coders.service";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

interface CardProps {
    data: ICompanies;
    pagination: IPageable;
}

const SectionComp = styled.div`
    width: 100%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Cards = styled.div`
    width: 100%;
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: auto;
    justify-items: center;
    align-items: start;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

const Pagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`;

const useServices = new Service();
export default function SectionCardComp({ data , pagination}: CardProps) {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [ModalOpenEmp, setModalOpenEmp] = useState(false);

    const toggleModalEmp = () => {
        setModalOpenEmp(!ModalOpenEmp);
        if (ModalOpenEmp) {
            setCompanySelected(undefined);
        }
    }
    const [companySelected, setCompanySelected] = useState<ICompany>();

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

    const handleEdit = (company: ICompany) => {
        setCompanySelected(company);
        toggleModalEmp();
    };

    const handleDelete = async (id: string) => {
        try {
            await useServices.deleteCompany(id);
            alert('Empresa eliminada correctamente');
        } catch (error) {
            console.error('Error eliminando empresa:', error);
        }
    };

    console.log(data);

    const courrentPage = pagination.pageNumber + 1;
    return (
        <SectionComp>
            <Cards>
                {data.content.map((company) => (
                    <CardCompComponents
                        key={company.id}
                        company={company}
                        onClickEdit={handleEdit}
                        onClickDelete={()=>handleDelete(company.id)}
                    />
                ))}
            </Cards>
            <Pagination>
                <ButtonPag label="<" onClick={() => HandleClickBack(courrentPage - 1)} />
                Página {courrentPage} de {data.totalPages}
                <ButtonPag label=">" onClick={() => HandleClickNext(courrentPage + 1)} />
            </Pagination>
            <Modal isOpen={ModalOpenEmp} onClose={toggleModalEmp} title="Editar Compañia">
                    <FormEmp onClose={toggleModalEmp} initialData={companySelected}/>
            </Modal>
        </SectionComp>
    );
}