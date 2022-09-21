import React,{createContext, useReducer } from 'react' ;
import AppReducer from './AppReducer';

//Initial State
const initialstate = {
    transactions: [
        { id:1,text:'Flower',amount:-20 },
        { id:2,text:'Salary',amount:300 },
        { id:3,text:'Book',amount:150 },
        { id:4,text:'camera',amount:-10 },
    ]
}

//create context

export const GlobalContext = createContext(initialstate);

//Actions
function  deletetransaction(id) {
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    });
}
//provider componet
export const GlobalProvider =({childern}) => {
    const[state,dispatch] =useReducer(AppReducer,initialstate);

    return(
        <GlobalContext.Provider value ={{
            transactions:state.transactions,
            deletetransaction
        }}>
            {childern}
        </GlobalContext.Provider>
    );

}