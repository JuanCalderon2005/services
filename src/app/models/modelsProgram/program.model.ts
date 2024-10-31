export interface ICompany{
    id: string;
    name: string;
    location: string;
    contact: string;
    vacants: []
  }
  
  export interface IPageable{
    pageNumber: number;
    pageSize: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean
    };
    offset: number;
    paged: boolean;
    unpaged: boolean
  }
  
  export interface ICompanies {
    content: ICompany[];
    pageable: IPageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    numberOfElements: number;
    size: number;
    number: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean
    };
    first: boolean;
    empty: boolean;
  }
  
  export interface IGetCompanyRequest{
    page: number;
    size: number;
    name?: string;
  }
  
  export interface IGetVacanciesRequest{
    page: number;
    size: number;
  }
  
  export interface IVacancyResponse{
    content: IVacancy[]
    pageable: IPageable
    totalPages: number
    totalElements: number
    last: boolean
    numberOfElements: number
    size: number
    number: number
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean
    };
    first: boolean
    empty: boolean
  }
  
  export interface IVacancy {
    id: string
    title: string
    description: string
    status: string
    company: ICompany
  }
  