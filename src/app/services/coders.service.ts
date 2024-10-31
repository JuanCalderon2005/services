import { ICompanies, ICompany, IGetCompanyRequest, IGetVacanciesRequest, IVacancy, IVacancyResponse } from "@/app/models/modelsProgram/program.model";
import { IPostCompany, IPostCompanyResponse, IPostVacancy, IPostVacancyResponse } from "@/app/models/posts/post";
import { HttpClient } from "../utils/client-http";


export class  Service {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async Companies({page, size, name }: IGetCompanyRequest) {
    try {
      const response = this.httpClient.get<ICompanies>(`company?page=${page}&size=${size}&name=${name}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async AllCompanies() {
    try {
      const response = this.httpClient.get<ICompany[]>(`company/all`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async allVacants({page, size}: IGetVacanciesRequest) {
    try {
      const response = this.httpClient.get<IVacancyResponse>(`vacants?page=${page}&size=${size}`);

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  async createCompany(company: IPostCompany) {
    try {
      const createdCompany = await this.httpClient.post<IPostCompanyResponse, IPostCompany>("company", company);
      return createdCompany;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createVacant(vacants: IPostVacancy) {
    try {
      const createdCompany = await this.httpClient.post<IPostVacancyResponse, IPostVacancy>("vacants", vacants);
      return createdCompany;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteCompany(id: string) {
    try {
      const company = this.httpClient.delete<ICompany>(`company/${id}`);
      return company;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteVacant(id: string) {
    try {
      const vacant = this.httpClient.delete<IVacancy>(`vacants/${id}`);
      return vacant;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }


  async updateCompany(id: string, company: IPostCompany) {
    try {
      const updatedCompany = await this.httpClient.put<IPostCompany, IPostCompany>(`company/${id}`, company);
      return updatedCompany;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateVacancy(id: string, vacant: IPostVacancy) {
    try {
      const updatedVacancy = await this.httpClient.put<IPostVacancy, IPostVacancy>(`vacants/${id}`, vacant);
      return updatedVacancy;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
}