import React, { useState, useEffect } from 'react';
import SnackSquare from '../components/SnackSquare';
import { getSnacks } from '../util/requests';

const Current: React.FC = () => {
    const [snacks, setSnacks] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getSnacks('http://localhost:5000/snacks', setReturnedSnacks, displayError);
    }, []);

    const setReturnedSnacks = (res) => {
        const sortedSnacks = res.sort((a, b) => b.votes - a.votes);
        setSnacks(res);
    }

    const displayError = () => {
        setError(true);
    }

    const snackSquares = snacks.map((snack, i) => {
        return (
            <SnackSquare
                name={snack.product}
                brand={snack.brand}
                imageUrl={snack.image}
                description={snack.description}
                votes={snack.votes}
                key={i}
            />
        );
    });

  return (
    <div className="site-bd-section site-bd-section_geo">
      <div className="u-constrainer">
          <div className="layoutPanel">

              <div className="layoutPanel-hd">
                  <div className="layoutPanel-hd-title">
                      <h2 className="hdg hdg_2">Currently In Stock</h2>
                  </div>
                  <div className="layoutPanel-hd">
                    <h2 className="hdg hdg_3">Here are the snacks that are available in the Nerdery kitchen now.</h2>
                  </div>
              </div>
              <div className="layoutPanel-bd snack-grid">
                { error ? 
                    <div>
                        <h1>We're sorry!</h1>
                        <h4>We're having trouble getting the current snacks right now. Please check back later.</h4>
                    </div>
                : null}
                { snackSquares }
              </div>
            </div>
        </div>
    </div>
  )
}

export default Current;