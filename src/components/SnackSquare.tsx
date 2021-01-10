import React from 'react';

type Props = {
  name: string;
  votes: number;
  description: string;
  brand: string;
  imageUrl: string;
  key: number;
}

const SnackSquare: React.FC<Props> = (props: Props) => {
    /* Todo: Sort by votes */
    const style = {
        backgroundImage: `url(${props.imageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50%'
    };
  return (
    <div className="snack">
        <div className="snack-square" style={style}>
            <div className="votes">
                <p>{props.votes}</p>
            </div>
        </div>
        <div className="snack-info">
            <h2 className="hdg hdg_4">{props.name}</h2>
            <h2 className="hdg hdg_5">{props.brand}</h2>
        </div>
    </div>
  );
};

export default SnackSquare;