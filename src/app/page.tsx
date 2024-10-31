import SectionCardCav from "@/app/components/organisms/sectionCardsVac";
import VacantsTemplate from "@/app/components/templates/vacantsTemplate";
import { IGetVacanciesRequest } from "@/app/models/modelsProgram/program.model";
import { Service } from "@/app/services/coders.service";
import React, { Suspense } from "react";

interface Iprops {
  searchParams: IGetVacanciesRequest;
}
const usevacantsServices = new Service();
export default async function Home({ searchParams }: Iprops) {
  const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
  const response = await usevacantsServices.allVacants({ page, size: 6 });

  function SearchBarFallback() {
    return <>Loading...</>
  }
  return (
    <>
      <VacantsTemplate />
      <Suspense fallback={<SearchBarFallback />}>
        <SectionCardCav data={response} pagination={response.pageable} />
      </Suspense>
    </>
  );
}