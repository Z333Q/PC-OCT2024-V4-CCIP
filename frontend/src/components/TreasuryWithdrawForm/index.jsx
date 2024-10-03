import React, { useState, useEffect } from 'react';
import contractService from '../../../services/contractService';
import './styles.css';

const TreasuryWithdrawForm = () => {
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      const treasuryBalance = await contractService.getTeamTreasury();
      setBalance(treasuryBalance);
    };
    fetchBalance();
  }, []);

  const handleWithdrawal = async () => {
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      if (amount) {
        const transaction = await contractService.withdrawFromTreasury(amount);
        const updatedBalance = await contractService.getTeamTreasury();
        setBalance(updatedBalance);
        setSuccess(`Withdrawal successful! Transaction ID: ${transaction.id}. New balance: ${updatedBalance}`);
      } else {
        setError('Please enter a valid amount.');
      }
    } catch (err) {
      setError(`Withdrawal failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="treasury-withdraw-form">
      <h2>Withdraw From Treasury</h2>
      <p>Current Balance: {balance !== null ? `${balance} ETH` : 'Loading...'}</p>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleWithdrawal} disabled={loading}>
        {loading ? 'Processing...' : 'Withdraw'}
      </button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default TreasuryWithdrawForm;
