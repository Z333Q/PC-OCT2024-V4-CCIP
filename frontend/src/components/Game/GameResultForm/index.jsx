import React, { useState, useEffect } from 'react';
import contractService from '../../../services/contractService';
import './styles.css';

const GameResultForm = () => {
  const [teamId, setTeamId] = useState('');
  const [result, setResult] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const leaderboardData = await contractService.getLeaderboard();
      setLeaderboard(leaderboardData);
    };
    fetchLeaderboard();
  }, []);

  const handleResultSubmission = async () => {
    setError('');
    setSuccess('');
    try {
      if (teamId && result) {
        await contractService.submitGameResult(teamId, result);
        setSuccess('Game result submitted successfully!');
        const updatedLeaderboard = await contractService.getLeaderboard();
        setLeaderboard(updatedLeaderboard);
      } else {
        setError('Please provide both team ID and result.');
      }
    } catch (err) {
      setError(`Submission failed: ${err.message}`);
    }
  };

  return (
    <div className="game-result-form">
      <h2>Submit Game Result</h2>
      <input
        type="text"
        placeholder="Team ID"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Result (Win/Loss)"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />
      <button onClick={handleResultSubmission}>Submit Result</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <h3>Leaderboard</h3>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Treasury Balance</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((team) => (
            <tr key={team.teamId}>
              <td>{team.teamId}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.treasuryBalance} ETH</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameResultForm;
