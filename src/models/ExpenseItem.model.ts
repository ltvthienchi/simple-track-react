import { CommonPropsModel } from '../shared/common-props.model';

export interface ExpenseItemModel extends CommonPropsModel {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
