import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ExpenseItemModel } from './models/ExpenseItem.model';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  let data: ExpenseItemModel[] = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(data);
  
  
  const submitNewExpenseHandle = (newExpense: ExpenseItemModel) => {
    // setExpenses([newExpense, ...expenses]);
    setExpenses((prevState: ExpenseItemModel[]) => [newExpense, ...prevState]);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <NewExpense onSubmitNewExpense={submitNewExpenseHandle}/>
        <Expenses expenses={expenses}/>
      </header>
    </div>
  );
}

export default App;
