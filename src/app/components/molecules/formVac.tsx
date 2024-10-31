'use client'
import InputField from "../molecules/inputField";
import ButtonComponent from "../atoms/button";
import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import SelectField from "../molecules/selectField";
import { Service } from "@/app/services/coders.service";
import { IPostVacancy } from "@/app/models/posts/post";
import { useRouter } from "next/navigation";
import { IVacancy } from "@/app/models/modelsProgram/program.model";

const StyledForm = styled.form`
        max-width: 350px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0.5rem;
    `;
interface ICompanyOptions {
    value: string;
    label: string;
}

interface IFormEmpProps {
    onClose: () => void;
    initialData?: IVacancy;
    id?: string;
}

const useCompaniesServices = new Service();
export default function FormVac({ onClose, initialData }: IFormEmpProps) {
    const router = useRouter();
    const [vacant, setVacant] = useState<IPostVacancy>({
        title: '',
        description: '',
        status: '',
        companyId: ''
    });
    const optionsStatus = [
        { value: 'ACTIVE', label: 'Active' },
        { value: 'INACTIVE', label: 'Inactive' },
    ]
    const [optionsCompany, setOptionsCompany] = useState<ICompanyOptions[]>([]);
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const companies = await useCompaniesServices.AllCompanies();
                setOptionsCompany(
                    companies && companies.length > 0
                        ? companies.map((company) => ({ value: company.id, label: company.name }))
                        : [{ value: '', label: 'no hay compañías' }]
                );
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };
        fetchCompanies();
    }, []);

    useEffect(() => {
        if (initialData) {
            setVacant({
                title: initialData.title,
                description: initialData.description,
                status: initialData.status,
                companyId: initialData.company.id
            });
        }
    }, [initialData]);

    const handleSubmit = async (e: FormEvent<Element>) => {
        e.preventDefault();
        try {
            if (initialData && initialData.id) {
                await useCompaniesServices.updateVacancy(initialData.id, vacant);
                alert('Vacante actualizada correctamente');
            } else {
                await useCompaniesServices.createVacant(vacant);
                alert('Vacante agregada correctamente');
            }
            onClose();
            router.refresh();
        } catch (error) {
            console.error('Error agregando vacante:', error);
        }
    }
    return (
        <StyledForm>
            <InputField
                type="text"
                onChange={(e) => setVacant({ ...vacant, title: e.target.value })}
                name="title"
                value={vacant.title}
                focusColor="primary"
                label="Título" />
            <InputField
                type="text-area"
                onChange={(e) => setVacant({ ...vacant, description: e.target.value })}
                name="description"
                value={vacant.description}
                focusColor="primary"
                label="Descripción" />
            <SelectField
                options={optionsStatus}
                value={vacant.status}
                onChange={(e) => setVacant({ ...vacant, status: e.target.value })}
                name="status"
                placeholder="OPEN"
                focusColor="primary"
                label="Estado" />
            <SelectField
                options={optionsCompany}
                value={vacant.companyId}
                onChange={(e) => setVacant({ ...vacant, companyId: e.target.value })}
                name="company"
                placeholder="Selecciona una compañia"
                focusColor="primary"
                label="Compañía" />
            <ButtonComponent
                label={initialData ? "Editar" : "Agregar"}
                onClick={handleSubmit}
                color="primary"
                hoverColor="primary" />
        </StyledForm>
    );
}