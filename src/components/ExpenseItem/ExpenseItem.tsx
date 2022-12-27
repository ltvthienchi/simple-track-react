import './ExpenseItem.scss';
import { ExpenseItemModel } from '../../models/ExpenseItem.model';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
import { useState } from 'react';

export default function ExpenseItem(props: ExpenseItemModel) {
  const [title, setTitle] = useState(props.title || 'This is title');
  const subTitle: string = 'This is sub-title';
  
  const clickHandler = () => {
    setTitle('New title');
    console.log(title);
  }
  
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <p className="expense-item__price">{props.amount || subTitle}</p>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
}
