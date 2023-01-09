import { Company } from "../store/companies-slice";

export const sortRandomAndSliceFour = (companies: Company[]) => {
  return companies.sort(() => 0.5 - Math.random())
  .slice(0, 4);
}