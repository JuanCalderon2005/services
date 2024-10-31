'use client'
import InputField from "../molecules/inputField";
import ButtonComponent from "../atoms/button";
import { ICompany } from "@/app/models/modelsProgram/program.model";
import { IPostCompany } from "@/app/models/posts/post";
import { Service } from "@/app/services/coders.service";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.5rem;
`;

interface IFormEmpProps {
    onClose: () => void;
    initialData?: ICompany;
    id?: string;
}

const useServices = new Service();

export default function FormEmp({ onClose, initialData }: IFormEmpProps) {
    const router = useRouter();
    const [company, setCompany] = useState<IPostCompany>({
        name: "",
        location: "",
        contact: ""
    });

    useEffect(() => {
        if (initialData) {
            setCompany({...initialData});
        }
    }, [initialData]);

    const handleSubmit = async (e: FormEvent<Element>) => {
        e.preventDefault();
        try {
            if (initialData && initialData.id) {
                await useServices.updateCompany(initialData.id, company);
                alert('Empresa editada correctamente');
            } else {
                await useServices.createCompany(company);
                alert('Empresa agregada correctamente');
            }
            onClose();
            router.refresh();
        } catch (error) {
            console.error(`Error ${initialData ? 'editando' : 'agregando'} empresa:`, error);
        }
    }

    return (
        <StyledForm>
            <InputField 
                type="text" 
                onChange={(e) => setCompany({ ...company, name: e.target.value })} 
                name="name" 
                value={company.name} 
                focusColor="secondary" 
                label="Nombre" 
            />
            <InputField 
                type="text" 
                onChange={(e) => setCompany({ ...company, location: e.target.value })} 
                name="location" 
                value={company.location} 
                focusColor="secondary" 
                label="Ubicación" 
            />
            <InputField 
                type="text" 
                onChange={(e) => setCompany({ ...company, contact: e.target.value })} 
                name="contact" 
                value={company.contact} 
                focusColor="secondary" 
                label="Contacto" 
            />
            <ButtonComponent 
                onClick={handleSubmit}
                label={initialData ? "Editar" : "Agregar"} 
                color="secondary" 
                hoverColor="secondary" 
            />
        </StyledForm>
    );
}