import React from 'react';

type Props = {
  currentlySelected: Array<{ id: string, brand: string, product: string, votes: number }>;
  votes: number;
}

const SelectionTable: React.FC<Props> = (props: Props) => {
  const selections = props.currentlySelected.map((item, i) => {
    return (
      <p key={i} className="selection">{`${item.brand} ${item.product}`}<span className="selection-votes">{item.votes}</span></p>
    );
  });

  return (
    <div id="selection-table">
      <div className="st-header">
        Selection <span className="vote-count vote-count-dk">{3 - props.votes}</span>
      </div>
      <div className="st-rows">
        { selections }
      </div>
    </div>
  );
};

export default SelectionTable;