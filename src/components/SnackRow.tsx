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
}

const SnackRow: React.FC<Props> = (props: Props) => {
   const selectOrDeselect = () => {
      props.handleClick(props.id, `${props.brand} ${props.product}`, props.votes);
   };

   const icon = props.selected ? White_check : plus;
   const indicatorClass = props.selected ? ' selected' : ''
  return (
    <tr onClick={selectOrDeselect} className="snack-row">
      <td className={`snack-indicator${indicatorClass}`}><img src={icon} /></td>
      <td className="snack-name">{`${props.brand} ${props.product}`}</td>
      <td className="snack-votes">{props.votes}</td>
    </tr>
  );
};

export default SnackRow;