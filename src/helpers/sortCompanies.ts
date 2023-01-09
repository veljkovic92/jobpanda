import { Company } from "../store/companies-slice";

export const sortCompanies = (companies: Company[], technology: string) => {
  return companies.filter((company) => {
    return company.industries.find(
      (industry) => industry === technology
    );
  })
}

