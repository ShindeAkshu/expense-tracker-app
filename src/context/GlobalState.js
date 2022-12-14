import React,{createContext, useReducer } from 'react' ;
import AppReducer from './AppReducer';

//Initial State
const initialstate = {
    transactions: [
     
    ]
}

//create context

export const GlobalContext = createContext(initialstate);


   
//provider componet
export const GlobalProvider =({childern}) => {
    const[state,dispatch] =useReducer(AppReducer,initialstate);

    //action 
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
        
    }

    function AddTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

    return(
        <GlobalContext.Provider value ={{
            transactions:state.transactions,
            deleteTransaction,
            AddTransaction
        }}>
            {childern}
        </GlobalContext.Provider>
    );

}