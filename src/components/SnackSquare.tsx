import React from 'react';

type Props = {
  name: string;
  votes: number;
  description: string;
  brand: string;
  imageUrl: string;
}
const SnackSquare: React.FC<Props> = (props: Props) => {
  return (
    <div className="snack">
        <div className="snack-square">
            <div className="votes">
                <p>{props.votes}</p>
            </div>
            <img src={props.imageUrl} />
        </div>
        <div className="snack-info">
            <h2 className="hdg hdg_4">{props.name}</h2>
            <h2 className="hdg hdg_5">{props.brand}</h2>
        </div>
    </div>
  );
};

export default SnackSquare;