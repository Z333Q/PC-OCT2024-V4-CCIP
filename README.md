Puck City OCT 2024 (V4) CCIP Integration
Project Overview
This repository contains the latest version (V4) of the Puck City MVP, featuring the integration of Chainlink's Cross-Chain Interoperability Protocol (CCIP). This version introduces a range of updates to enhance cross-chain token transfers, improve efficiency, and upgrade the overall Puck City experience with a focus on zkEVM and account abstraction.

Key Features:
Chainlink CCIP Integration: Enables seamless cross-chain interoperability for the 'CITY' and 'PUCK' tokens, allowing secure transfers across multiple blockchains.
zkEVM Integration: Implements Polygon zkEVM with account abstraction to improve scalability, security, and performance, reducing gas fees and enhancing user experience.
Frontend Upgrades: The updated UI/UX reflects these protocol enhancements, providing a more intuitive and user-friendly interface for players.
Smart Contract Updates: Refined tokenomics and new contracts designed to support zero-gas trades, enhanced security, and cross-chain operability.

Installation
Follow these steps to install and run the project locally.

Prerequisites:
Node.js (v14 or later)
npm (v6 or later)
Hardhat (for smart contract development)
Steps:
Clone the repository:

git clone https://github.com/Z333Q/PC-OCT2024-V4-CCIP.git
Navigate to the project directory:

cd PC-OCT2024-V4-CCIP
Install npm dependencies:


npm install
Set up environment variables for deployment:

cp .env.example .env
Configure your environment variables in the .env file (e.g., private keys, network URLs).

Usage
Deploying Smart Contracts
Ensure that your environment variables are properly configured for your chosen network before deploying:

Compile the smart contracts:

npx hardhat compile
Deploy the contracts:

npx hardhat run scripts/deploy.js --network <network-name>
Replace <network-name> with the appropriate blockchain network (e.g., mainnet, polygon, etc.).

Running the Frontend
To start the frontend locally:

Navigate to the frontend directory:

cd frontend
Start the development server:

npm run dev
Access the app in your browser at http://localhost:3000.

Testing
Run tests to verify the smart contract functionality:

npx hardhat test
Tests are located in the tests directory and cover key functionalities like token transfers, cross-chain operability, and contract interactions.

Contributing
We welcome contributions to enhance Puck City's cross-chain capabilities. Follow these steps to contribute:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and ensure tests are passing.
Submit a pull request for review.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgements
This project is powered by Chainlink CCIP, Polygon zkEVM, and the Puck City community.
