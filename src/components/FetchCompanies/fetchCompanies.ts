import axios from "axios";
import { Dispatch } from "redux";
import { companiesActions } from "../../store/companies-slice";

interface FetchDataAction {
  type:
    | "FETCH_DATA_START"
    | "FETCH_DATA_SUCCESS"
    | "FETCH_DATA_ERROR"
    | "companies/addCompanies";
  payload?: any;
}

export const fetchCompanies = () => {
  
  
  return async (dispatch: Dispatch<FetchDataAction>) => {
    
    
    try {
      

      // dispatch({ type: "FETCH_DATA_START" });
      const response = await axios.get<any>(
        "https://api.thecompaniesapi.com/v1/companies?size=100&token=ahF0qg2s"
      );

      dispatch(companiesActions.addCompanies(response.data));
      localStorage.setItem("companies", JSON.stringify(response.data));
      // dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
    } catch (error) {
      // dispatch({ type: "FETCH_DATA_ERROR", payload: error });
    }
  };
};
