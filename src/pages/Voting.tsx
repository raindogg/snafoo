import React, { useState, useEffect } from 'react';
import VotingTable from '../components/VotingTable';
import SelectionTable from '../components/SelectionTable';

const Voting: React.FC = () => {
  const [votes, setVotes] = useState(3);
  const [currentlySelected, setCurrentlySelected] = useState([]);

  const updateSelections = (id, name, itemVotes) => {
    setVotes(votes - 1);
    setCurrentlySelected([...currentlySelected, { id, name, votes: itemVotes }]);
  }

  const devAvailableSnacks = [{
      id: '01',
      brand: 'kashi',
      product: 'bites',
      description: 'lovely bites',
      image: '#',
      votes: 2,
    }, {
      id: '02',
      brand: 'cheetos',
      product: 'puffs',
      description: 'lovely puffs',
      image: '#',
      votes: 6,
    }, {
      id: '03',
      brand: 'nabisco',
      product: 'oreos',
      description: 'lovely oreos',
      image: '#',
      votes: 7,
    }, {
      id: '04',
      brand: 'nut joy',
      product: 'nuts',
      description: 'lovely nuts',
      image: '#',
      votes: 1,
    }];

	return (
		<div className="site-bd-section site-bd-section_gray">
				<div className="u-constrainer">
						<div className="layoutPanel">
								<div className="layoutPanel-hd">
										<div className="layoutPanel-hd-title">
												<h2 className="hdg hdg_2 mix-hdg_dark u-vr_x4">Snack Voting</h2>
                        <h2 className="hdg hdg_4 mix-hdg_dark u-vr_x4">Vote on the snacks you want to see in this month's rotation</h2>
										</div>
                    <div className="layoutPanel-hd-title votes-title u-vr_x4">
                      <h2 className="hdg mix-hdg_dark"><span className="vote-number">{ votes }</span> Votes Remaining</h2>
                    </div>
								</div>
                <div className="layoutPanel-bd voting-grid">
                  <VotingTable 
                    availableSnacks={devAvailableSnacks}
                    currentSelections={currentlySelected}
                    updateSelections={updateSelections}
                  />
                  <SelectionTable 
                    currentlySelected={currentlySelected}
                    votes={votes}
                  />
                </div>
							</div>
          </div>
      </div>
	);
};

export default Voting;