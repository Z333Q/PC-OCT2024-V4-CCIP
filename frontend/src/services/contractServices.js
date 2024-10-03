import { ethers } from 'ethers';
import { getContract } from './contractHelper';

// Function to get the treasury balance of a team
export const getTeamTreasury = async (teamId) => {
  try {
    const contract = getContract();
    const balance = await contract.getTreasuryBalance(teamId);
    return ethers.utils.formatEther(balance);
  } catch (error) {
    throw new Error('Error fetching treasury balance: ' + error.message);
  }
};

// Function to withdraw from treasury
export const withdrawFromTreasury = async (amount) => {
  try {
    const contract = getContract();
    const tx = await contract.withdraw(amount);
    await tx.wait();
    return tx;
  } catch (error) {
    throw new Error('Withdrawal failed: ' + error.message);
  }
};

// Function to get the leaderboard data
export const getLeaderboard = async () => {
  try {
    const contract = getContract();
    const leaderboard = await contract.getLeaderboard();
    return leaderboard.map((team) => ({
      teamId: team.teamId,
      wins: team.wins.toNumber(),
      losses: team.losses.toNumber(),
      treasuryBalance: ethers.utils.formatEther(team.treasuryBalance),
    }));
  } catch (error) {
    throw new Error('Error fetching leaderboard: ' + error.message);
  }
};

// Function to estimate gas fees for cross-chain transactions
export const estimateGasFees = async (transactionData) => {
  try {
    const contract = getContract();
    const gasEstimate = await contract.estimateGas(transactionData);
    return ethers.utils.formatEther(gasEstimate);
  } catch (error) {
    throw new Error('Error estimating gas fees: ' + error.message);
  }
};

// Function to handle cross-chain transaction status
export const getCrossChainStatus = async (transactionHash) => {
  try {
    const contract = getContract();
    const status = await contract.getCrossChainStatus(transactionHash);
    return status;
  } catch (error) {
    throw new Error('Error fetching cross-chain status: ' + error.message);
  }
};
