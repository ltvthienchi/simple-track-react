import { ExpenseItemModel } from '../../models/ExpenseItem.model';
import './Expenses.scss';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import React, { PropsWithChildren, PropsWithRef, useState } from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseChart from '../Chart/ExpenseChart';

export type ExpensesPropsModel = {
  expenses: ExpenseItemModel[]
}

const Expenses = (props: ExpensesPropsModel) => {
  const [selectYear, setSelectYear] = useState('2022');
  const expensesFilterChangeHandle = (year: string) => {
    setSelectYear(year);
  }
  const filteredExpenses: ExpenseItemModel[] = props.expenses.filter(item => {
    return item.date.getFullYear().toString() === selectYear;
  });
  
  return (
    <div className="expense">
      <ExpensesFilter selected={selectYear} onChangeFilter={expensesFilterChangeHandle}/>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </div>
  );
}

export default Expenses;
