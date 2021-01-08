import React from 'react';
import SnackRow from './SnackRow';
import { Snack } from '../util/interfaces';

type Props = {
  availableSnacks: Array<Snack>;
  currentSelections: Array<{id: string; product: string}>;
  updateSelections: Function;
}

const VotingTable: React.FC<Props> = (props: Props) => {


  const rows = props.availableSnacks.map((snack, i) => {
    return (
      <SnackRow 
        id={snack.id}
        brand={snack.brand}
        product={snack.product}
        votes={snack.votes}
        handleClick={props.updateSelections}
        selected={props.currentSelections.some((selectedSnack) => selectedSnack.id === snack.id)}
        key={i}
      />
    )
  });


  return (
    <table id="voting-table">
      <thead>
        <tr id="voting-table-head">
          <th id="vt-header" colSpan={2}>Available Items</th>
          <th><div className="vote-count vote-count-lt">{props.availableSnacks.length}</div></th>
        </tr>
      </thead>
      <tbody>
        { rows }
      </tbody>
    </table>
  );
};

export default VotingTable;