export interface IPostCompany {
    name: string;
    location: string;
    contact: string;
}

export interface IPostCompanyResponse {
    status: string,
    code: number,
    errors: [
        string
    ]
}

export interface IPostVacancy {
    title: string;
    description: string;
    status: string;
    companyId: string;
}

export interface IPostVacancyResponse {
    id: number,
    title: string,
    description: string,
    status: string,
    company: {
        id: string,
        name: string,
        location: string,
        contact: string
    }
}