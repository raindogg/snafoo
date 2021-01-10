import React from 'react';
import White_check from '../images/White_check.svg';
import plus from '../images/plus.svg';

type Props = {
  id: string;
  brand: string;
  product: string;
  votes: number;
  handleClick: Function;
  selected: boolean;
  key: number;
  outOfVotes: boolean;
}

const SnackRow: React.FC<Props> = (props: Props) => {
   const selectSnack = () => {
      props.handleClick(props.id, `${props.brand} ${props.product}`, props.votes);
   };
   const icon = props.selected ? White_check : plus;
   const indicatorClass = props.selected ? ' selected' : ''
   let clickHandler = selectSnack;

   // If the user is out of votes, or has already selected the snack, remove the event handler
   if (props.outOfVotes || props.selected) {
    clickHandler = () => null;
   }

  return (
    <tr onClick={clickHandler} className={`snack-row${indicatorClass}`}>
      <td className={`snack-indicator${indicatorClass}`}><img src={icon} /></td>
      <td className="snack-name">{`${props.brand} ${props.product}`}</td>
      <td className="snack-votes">{props.votes}</td>
    </tr>
  );
};

export default SnackRow;