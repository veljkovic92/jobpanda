import { Company } from "../store/companies-slice";

const allIndustries = (companies: Company[]) => {
  let arrayOfAllIndustries: string[] = [];

  if (companies !== undefined) {
    for (let i = 0; i < companies.length; i++) {
      arrayOfAllIndustries = [
        ...arrayOfAllIndustries,
        ...companies[i].industries,
      ];
    }
  }

  return arrayOfAllIndustries;
};

export const showNonDuplicates = (companies: Company[], type: string) => {
  let industries = allIndustries(companies);

  if (type === "non-duplicate") {
    let nonDuplicatedArrayOfAllIndustries = industries.filter((c, index) => {
      return industries.indexOf(c) !== index;
    });

    // You can also change the logic here and use 'Regex' to regulate the look of each industry (put space instead of line for example)

    for (let i = 0; i < nonDuplicatedArrayOfAllIndustries.length; i++) {
      nonDuplicatedArrayOfAllIndustries[i] =
        nonDuplicatedArrayOfAllIndustries[i].charAt(0).toUpperCase() +
        nonDuplicatedArrayOfAllIndustries[i].slice(1);
    }

    industries = nonDuplicatedArrayOfAllIndustries!
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
  }
  return industries;
};

export const showDuplicates = (companies: Company[], type: string) => {
  let industries = allIndustries(companies);

  if (type === "duplicate") {
    const popularIndustries: string[] = [];
    type Counts = {
      [key: string]: number;
    };

    const counts: Counts = {};
    industries.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
    });

    Object.keys(counts).map((industry) => {
      if (counts[industry] > 15) {
        popularIndustries.push(
          industry.charAt(0).toUpperCase() + industry.slice(1)
        );
      }
    });
    const random6 = popularIndustries!
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
    industries = random6;
  }
  return industries;
};
