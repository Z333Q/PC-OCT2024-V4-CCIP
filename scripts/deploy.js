// scripts/deploy.js
const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address);

    // Deploy AccessControlManager contract
    const AccessControlManager = await hre.ethers.getContractFactory("AccessControlManager");
    const accessControl = await AccessControlManager.deploy();
    console.log("AccessControlManager deployed at:", accessControl.address);

    // Deploy OracleManagement contract
    // Deploy TreasuryManagement contract
    const TreasuryManagement = await hre.ethers.getContractFactory("TreasuryManagement");
    const treasuryManagement = await TreasuryManagement.deploy(zkSyncOracleManagement.address, tokenManagement.address);
    await treasuryManagement.deployed();
    console.log("TreasuryManagement deployed to:", treasuryManagement.address);
    
    const OracleManagement = await hre.ethers.getContractFactory("OracleManagement");
    const zkSyncOracle = await OracleManagement.deploy();
    console.log("OracleManagement deployed at:", zkSyncOracle.address);

    // Deploy PriceCalculation contract
    const PriceCalculation = await hre.ethers.getContractFactory("PriceCalculation");
    const priceCalculation = await PriceCalculation.deploy();
    console.log("PriceCalculation deployed at:", priceCalculation.address);

    // Deploy BridgeOperations contract
    const BridgeOperations = await hre.ethers.getContractFactory("BridgeOperations");
    const zkSync zkSyncBridgeOperations = await BridgeOperations.deploy(accessControl.address);
    console.log("BridgeOperations deployed at:", zkSync zkSyncBridgeOperations.address);

    // Deploy TokenManagement contract
    const TokenManagement = await hre.ethers.getContractFactory("TokenManagement");
    const tokenManagement = await TokenManagement.deploy();
    console.log("TokenManagement deployed at:", tokenManagement.address);

    // Deploy GameManagement contract
    const GameManagement = await hre.ethers.getContractFactory("GameManagement");
    const gameManagement = await GameManagement.deploy();
    console.log("GameManagement deployed at:", gameManagement.address);

    // Deploy Main PuckCity contract and link other modules
    const PuckCity = await hre.ethers.getContractFactory("PuckCity");
    const puckCity = await PuckCity.deploy(
        treasuryManagement.address,
        zkSyncOracle.address,
        accessControl.address,
        priceCalculation.address,
        zkSync zkSyncBridgeOperations.address,
        tokenManagement.address,
        gameManagement.address
    );
    console.log("PuckCity (Main) deployed at:", puckCity.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
