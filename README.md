
# Puck.City - October 2024 MVP (Version 4)

Welcome to the Puck.City project repository! This version of the project introduces major upgrades to the smart contracts, frontend, and cross-chain integrations, focusing on the latest in blockchain technology. 

## Overview

**Puck.City** is a decentralized Web3 application that bridges sports fandom and blockchain technology. Our mission is to create an interactive experience where users can represent their cities, participate in governance, and engage in gamified team support—all powered by blockchain infrastructure.

### Key Features in Version 4:

1. **zkSync Integration**
   - Migrated from Polygon zkEVM to zkSync for improved scalability and account abstraction.
   - zkSync Era integration offers superior on-chain performance and faster transactions.
   - Leveraging zkSync’s L2 bridging for seamless cross-chain functionality.

2. **Chainlink CCIP**
   - Cross-Chain Interoperability Protocol (CCIP) is now fully integrated, enabling token interoperability across multiple chains.
   - Tokens involved: **CITY** and **PUCK**.
   - Enhances decentralized decision-making for treasury distribution.

3. **UI/UX Upgrades**
   - Frontend overhaul to reflect zkSync enhancements.
   - Improved user interface for a better on-chain experience.
   - Simplified user journey with account abstraction built directly into the zkSync interface.

---

## Tech Stack

- **Backend:** Solidity, Chainlink CCIP
- **Frontend:** React.js, TypeScript
- **Blockchain Layer:** zkSync Era (L2), Chainlink CCIP (Cross-Chain)
- **Development Tools:** Hardhat, Ethers.js
- **Deployment:** zkSync L2 Network, CCIP Infrastructure

---

## Key Components

### Smart Contracts:
The contracts in this repository are designed to handle the following:

1. **CITY and PUCK Token Logic**  
   - Manage in-game assets, fan engagement, and treasury distribution.

2. **Cross-Chain Interoperability**  
   - Built using Chainlink’s CCIP, allowing tokens and data to be transferred across supported chains.

3. **Treasury Management**  
   - Automates the distribution of treasury funds to winning teams after each game.

### Frontend:
Our UI is designed with ease-of-use in mind:

- **Account Abstraction:** Simplifies interaction with smart contracts and reduces gas fees.
- **zkSync Integration:** Provides fast and low-cost transactions while maintaining Ethereum security.
- **On-chain User Experience:** Streamlined for non-technical users, enhancing both engagement and transaction handling.

---

## Project Setup

### Prerequisites

Before getting started, ensure you have the following tools installed:

- Node.js (v18+)
- Yarn or npm
- Hardhat
- zkSync SDK
- Chainlink SDK

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Z333Q/PC-OCT2024-V4-CCIP.git
   ```
2. Navigate into the project directory:
   ```bash
   cd PC-OCT2024-V4-CCIP
   ```
3. Install the required dependencies:
   ```bash
   yarn install
   ```

### Running the Project

1. Compile the smart contracts:
   ```bash
   npx hardhat compile
   ```
2. Deploy contracts to zkSync Era:
   ```bash
   npx hardhat run scripts/deploy.js --network zkSync
   ```
3. Start the frontend:
   ```bash
   yarn start
   ```

---

## Deployment

### zkSync Network Deployment

The current version is deployed on zkSync Era to maximize scalability and improve user experience. To deploy to zkSync, follow these steps:

1. Configure zkSync in the `hardhat.config.js`:
   ```js
   networks: {
     zkSync: {
       url: 'https://mainnet.zksync.io',
       accounts: [privateKey],
     }
   }
   ```

2. Deploy your smart contracts to the zkSync Era testnet or mainnet.

---

## Contributing

We welcome contributions from the community! Whether it’s fixing bugs, suggesting new features, or improving documentation, your input is valued.

### How to Contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request and describe your changes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Contact

For questions, feedback, or support, please open an issue or contact us at [support@puck.city](mailto:support@puck.city).

---

This repository is maintained by **Fan City Limited** as part of the ongoing development of the Puck.City decentralized application. Stay tuned for updates!
