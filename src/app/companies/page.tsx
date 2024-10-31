// import React from 'react'
// import CompaniesTemplate from '../components/templates/companiesTemplate'

// export default function CompaniesPage() {
//   return (
//     <>
//       <CompaniesTemplate />
//     </>
//   )
// }

import SectionCardComp from '../components/organisms/sectionCardsComp';
import { IGetCompanyRequest } from '@/app/models/modelsProgram/program.model';
import { Service } from '@/app/services/coders.service';
import React, { Suspense } from 'react'
import CompaniesTemplate from '../components/templates/companiesTemplate';

interface Iprops {
  searchParams: IGetCompanyRequest;
}

const useCompaniesServices = new Service();
export default async function CompaniesPage({ searchParams }: Iprops) {
  const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
  const name = searchParams.name ? searchParams.name : '';
  const response = await useCompaniesServices.Companies({ page, size: 4, name });

  function SearchBarFallback() {
    return <>Loading...</>
  }

  return (
    <>
      <CompaniesTemplate />
      <Suspense fallback={<SearchBarFallback />}>
        <SectionCardComp data={response} pagination={response.pageable} />
      </Suspense>
    </>
  )
};