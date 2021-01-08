import React from 'react';
import SnackSquare from '../components/SnackSquare';

const Current: React.FC = () => {
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
              <div className="layoutPanel-bd">
                <SnackSquare 
                    name="Honey Pecan Baklava Bites"
                    brand="Kashi"
                    imageUrl="../images/03.jpg"
                    description="Some lovely bites"
                    votes={6}
                />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Current;