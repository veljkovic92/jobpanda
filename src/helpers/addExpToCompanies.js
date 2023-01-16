import React from 'react'

const addExpToCompanies = (companies) => {
  
  let newCompaniesArray;

  if (companies !== undefined) {
    newCompaniesArray = [...companies];
  }

  
  const changedArray = [];

  if (newCompaniesArray !== undefined) {
   newCompaniesArray.forEach(companyItem => {
    const randomNumberTo30 = Math.floor(Math.random() * 30);
   changedArray.push({
    ...companyItem,
    experienceWanted: randomNumberTo30
   }) 
   })
  
  }
  console.log(changedArray);
 
}

export default addExpToCompanies