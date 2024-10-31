import styled from "styled-components";

interface InfoCardProps{
    title: string;
    location: string;
    contact: string;
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

const Location = styled.p`
    font-size: 0.8rem;
    color: rgb(75, 85, 99);
`;

const Contact = styled.p`
    font-size: 0.8rem;
    color: rgb(107, 114, 128);
`;



export default function InfoCardComp({title, location, contact}: InfoCardProps ){

    return(
        <StylesInfoCard>
            <Title>{title}</Title>
            <Location>{location}</Location>
            <Contact>Contacto: {contact}</Contact>
        </StylesInfoCard>
    )
}