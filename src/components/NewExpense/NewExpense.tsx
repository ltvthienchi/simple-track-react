import './NewExpense.scss';
import { BaseSyntheticEvent, useState } from 'react';
import { ExpenseItemModel } from '../../models/ExpenseItem.model';

export interface UserModel {
  title: string;
  amount: number;
  date: string;
}

export interface NewExpensePropsModel {
  onSubmitNewExpense: (expenseData: ExpenseItemModel) => void;
}

export default function NewExpense (props: NewExpensePropsModel) {
  const initStateUser: UserModel = {
    title: 'New title',
    amount: 0.01,
    date: '2022-12-12'
  }
  
  // Set state like variable
  const [title, setTitle] = useState(initStateUser.title);
  const [amount, setAmount] = useState(initStateUser.amount);
  const [date, setDate] = useState(initStateUser.date);
  const [isShowForm, setIsShowForm] = useState(false);
  
  // Set state like a object
  const [user, setUser] = useState(initStateUser);
  
  const titleChangeHandle = (event: BaseSyntheticEvent) => {
    setTitle(event.target.value);
    // setUser({...user, title: event.target.value});
    // setUser((prevState) => { return {...prevState, title: event.target.value} });
  }
  const amountChangeHandle = (event: BaseSyntheticEvent) => {
    setAmount(event.target.value);
    // setUser({...user, amount: event.target.amount});
    // setUser((prevState) => { return {...prevState, amount: event.target.value} });
  }
  const dateChangeHandle = (event: BaseSyntheticEvent) => {
    setDate(event.target.value);
    // setUser({...user, date: event.target.date});
    // setUser((prevState) => { return {...prevState, date: event.target.value} });
  }
  const submitHandle = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    resetState();
    const expenseData: ExpenseItemModel = {
      id: Date.now().toString(),
      amount: +amount,
      date: new Date(date),
      title
    };
    props.onSubmitNewExpense(expenseData);
  }
  
  const toggleShowForm = () => {
    setIsShowForm(!isShowForm);
  }
  
  const resetState = () => {
    setTitle('');
    setAmount(0);
    setDate('');
  }
  
  return (
    <div className="new-expense">
      {!isShowForm && <button type="button" onClick={toggleShowForm}>Add new Expense</button>}
      {isShowForm &&
          <form onSubmit={submitHandle}>
              <div className="new-expense__controls">
                  <div className="new-expense__control">
                      <label>Title</label>
                      <input type="text" value={title} onChange={titleChangeHandle}/>
                  </div>
                  <div className="new-expense__control">
                      <label>Amount</label>
                      <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandle}/>
                  </div>
                  <div className="new-expense__control">
                      <label>Date</label>
                      <input type="date" min="2019-01-01" value={date} onChange={dateChangeHandle}/>
                  </div>
              </div>
              <div className="new-expense__actions">
                  <button type="button" onClick={toggleShowForm}>Cancel</button>
                  <button type="submit">Add Expense</button>
              </div>
          </form>
      }
    </div>
  );
}
