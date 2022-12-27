import { CommonPropsModel } from '../../shared/common-props.model';
import './Card.scss'

export default function Card(props: CommonPropsModel) {
  const classes = 'card ' + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}
