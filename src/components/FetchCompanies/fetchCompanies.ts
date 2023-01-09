import axios from "axios";
import { send } from "process";
import { Dispatch } from "redux";
import { companiesActions } from "../../store/companies-slice";

export interface FetchDataAction {
  type:
    | "FETCH_DATA_START"
    | "FETCH_DATA_SUCCESS"
    | "FETCH_DATA_ERROR"
    | "companies/addCompanies";
  payload?: any;
}

export const fetchCompanies = async (dispatch: Dispatch<FetchDataAction>) => {
  const sendRequest = async () => {
    const response = await axios.get<any>(
      "https://companies-b1edc-default-rtdb.europe-west1.firebasedatabase.app/companies.json"
    );

    const companiesData = response.data;

    return companiesData;
  };
  try {
    const companies = await sendRequest();
    dispatch(companiesActions.addCompanies(companies));
  } catch (error) {}
};
