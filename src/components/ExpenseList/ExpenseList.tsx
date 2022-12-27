import './ExpenseList.scss';
import { ExpenseItemModel } from '../../models/ExpenseItem.model';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export interface ExpenseListPropsModel {
  items: ExpenseItemModel[];
}

export default function ExpenseList(props: ExpenseListPropsModel) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  
  return (
    <ul className="expenses-list">
      { props.items.map(item => <ExpenseItem id={item.id} title={item.title} amount={item.amount} date={item.date} key={item.id}/>) }
    </ul>
  )
}
