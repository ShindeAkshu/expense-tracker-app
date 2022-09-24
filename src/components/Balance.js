import React ,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';


const Balance = () => {

 
  return (
    <>
      <h4>Your Balance</h4>
      <h1 >${total}</h1>
    </>
  )
}

export default Balance
