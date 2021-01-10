import React, { useState, useEffect } from 'react';
import VotingTable from '../components/VotingTable';
import SelectionTable from '../components/SelectionTable';
import { getSnacks, voteForSnack } from '../util/requests';

const Voting: React.FC = () => {
  const [snacks, setSnacks] = useState([]);
  const [votes, setVotes] = useState(3);
  const [currentlySelected, setCurrentlySelected] = useState([]);
  const [error, setError] = useState(false);
  const [votingError, setVotingError] = useState(false);

  useEffect(() => {
    const currVotes = localStorage.getItem('votes');
    const currSelections = localStorage.getItem('selections');

    if (currVotes) {
      setVotes(3 - parseInt(currVotes));
    }

    if (currSelections) {
      setCurrentlySelected(JSON.parse(currSelections));
    }
  }, []);

  const vote = (id) => {
    voteForSnack(id, updateSelections, displayVoteError);
  }

  const updateSelections = (snack) => {
    setVotes(votes -1);
    setCurrentlySelected([...currentlySelected, snack]);
  }

  const updateSnacks = (res) => {
    const sorted = res.sort((a, b) => b.votes - a.votes);
    setSnacks(sorted);
  }

  const displayError = () => {
    setError(true);
  }

  const displayVoteError = () => {
    setVotingError(true);
  }

  useEffect(() => {
    getSnacks('http://localhost:5000/futureSnacks', updateSnacks, displayError);
  }, []);

	return (
		<div className="site-bd-section site-bd-section_gray">
				<div className="u-constrainer">
						<div className="layoutPanel">
								<div className="layoutPanel-hd">
										<div className="layoutPanel-hd-title">
												<h2 className="hdg hdg_2 mix-hdg_dark u-vr_x4">Snack Voting</h2>
                        <h2 className="hdg hdg_4 mix-hdg_dark u-vr_x4">Vote on the snacks you want to see in this month's rotation</h2>
                        <h2 className="hdg hdg_4 mix-hdg_dark u-vr_x4">(Choose wisely! Once you click an item, you can't take it back.)</h2>
										</div>
                    <div className="layoutPanel-hd-title votes-title u-vr_x4">
                      <h2 className="hdg mix-hdg_dark"><span className="vote-number">{ votes }</span> Votes Remaining</h2>
                    </div>
                    { votes === 0 ? 
                      <div className="layoutPanel-hd-title votes-title u-vr_x4">
                        <h2 className="hdg mix-hdg_dark">Thanks for voting! Make sure to check back next month.</h2>
                      </div>
                      : null}
								</div>
                  { votingError ? 
                    <h1>We're sorry. We're having trouble tabulating your vote.</h1>
                  : null}
                  { error ? 
                    <h1>We're sorry. We're having trouble getting the potential snacks.</h1>
                    :
                    <div className="layoutPanel-bd voting-grid">
                      <VotingTable 
                        availableSnacks={snacks}
                        currentSelections={currentlySelected}
                        outOfVotes={votes === 0}
                        updateSelections={vote}
                      />
                      <SelectionTable 
                        currentlySelected={currentlySelected}
                        votes={votes}
                      />
                    </div>
                  }
							</div>
          </div>
      </div>
	);
};

export default Voting;