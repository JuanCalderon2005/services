import styled from "styled-components";

interface InfoCardProps{
    title: string;
    description: string;
    status: string;
    company: string;
}

const StylesInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;    
`;

const Title = styled.h2`
    font-size: 1.4rem;
    color: rgb(31, 41, 55);
    font-weight: bold;
`;

const Description = styled.p`
    font-size: 0.8rem;
    color: rgb(75, 85, 99);
`;

const Status = styled.p`
    font-size: 0.8rem;
    color: rgb(107, 114, 128);
    margin-top: 0.2rem;
`;

const Company = styled.p`
    font-size: 0.8rem;
    color: rgb(107, 114, 128);
    margin-top: 0.5rem;
`;

export default function InfoCard({ title, description, status, company }: InfoCardProps) {
    const limitDescription = (text: string, wordLimit: number) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <StylesInfoCard>
            <Title>{title}</Title>
            <Description>{limitDescription(description, 6)}</Description>
            <Status>Estado: {status}</Status>
            <Company>Compañía: {company}</Company>
        </StylesInfoCard>
    );
}