import React, {useState, useEffect , createContext} from 'react';
import { getData } from '../modules/home/services/api';


export const SpendingContext = createContext()

const SpendingContextProvider = ({children}) => {

    const[spendings , setSpendings] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setSpendings(await getData())
        }
        fetchAPI()
    },[])

    return (
        <SpendingContext.Provider value={spendings}>
            {children}
        </SpendingContext.Provider>
    );
};

export default SpendingContextProvider;