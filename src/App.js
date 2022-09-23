import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransationList from './components/TransationList';
import AddTransaction from './components/AddTransaction';


import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransationList/>
        <AddTransaction/>
       
      </div>
    </GlobalProvider>
  );
}

export default App;
