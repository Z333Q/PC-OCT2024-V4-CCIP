
import Web3 from 'web3';
import * as Sentry from '@sentry/react';  // Adding Sentry for error logging
import PuckCityContract from '../../contracts/PuckCity.json';
import TreasuryManagementContract from '../../contracts/TreasuryManagement.json';
import PriceCalculationContract from '../../contracts/PriceCalculation.json';
import AccessControlManagerContract from '../../contracts/AccessControlManager.json';
import OracleManagementContract from '../../contracts/OracleManagement.json';
import BridgeOperationsContract from '../../contracts/BridgeOperations.json';
import GameManagementContract from '../../contracts/GameManagement.json';

// Setup web3 provider
const web3Provider = Web3.givenProvider || 'http://localhost:8545';

export function initializeWeb3() {
    return new Web3(web3Provider);
}

// Contract instances
const web3 = initializeWeb3();
const puckCityInstance = new web3.eth.Contract(PuckCityContract.abi, PuckCityContract.networks[5777].address);
const treasuryInstance = new web3.eth.Contract(TreasuryManagementContract.abi, TreasuryManagementContract.networks[5777].address);
const priceInstance = new web3.eth.Contract(PriceCalculationContract.abi, PriceCalculationContract.networks[5777].address);
const accessControlInstance = new web3.eth.Contract(AccessControlManagerContract.abi, AccessControlManagerContract.networks[5777].address);
const oracleInstance = new web3.eth.Contract(OracleManagementContract.abi, OracleManagementContract.networks[5777].address);
const bridgeInstance = new web3.eth.Contract(BridgeOperationsContract.abi, BridgeOperationsContract.networks[5777].address);
const gameInstance = new web3.eth.Contract(GameManagementContract.abi, GameManagementContract.networks[5777].address);

// Role-based security check with enhanced error logging
export async function isAdmin(account) {
    try {
        const isAdmin = await accessControlInstance.methods.hasRole(
            web3.utils.keccak256('ADMIN_ROLE'), account
        ).call();
        return isAdmin;
    } catch (error) {
        Sentry.captureException(error);  // Log error using Sentry
        console.error("Error checking admin role:", error);
        throw new Error("Unable to verify admin role.");
    }
}

// Optimized contract interaction with gas reduction
export async function addTeamAsAdmin(teamId, teamName, account) {
    try {
        const isAdmin = await isAdmin(account);
        if (!isAdmin) {
            throw new Error("Access denied: Only admins can add a team.");
        }
        const gasEstimate = await gameInstance.methods.addTeam(teamId, teamName).estimateGas({ from: account });
        await gameInstance.methods.addTeam(teamId, teamName).send({ from: account, gas: gasEstimate });
    } catch (error) {
        Sentry.captureException(error);  // Log error using Sentry
        console.error("Error adding team:", error);
        throw new Error("Unable to add team. Please try again later.");
    }
}
