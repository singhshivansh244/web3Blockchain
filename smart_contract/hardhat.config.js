// https://eth-sepolia.g.alchemy.com/v2/1sUz443ibizg3Bko6mM5zkdWa4Ja8RbW

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/1sUz443ibizg3Bko6mM5zkdWa4Ja8RbW',
      accounts: ['07c641341a2a1b919a81fa804aefaf079b9952b47b0fad34ad5d936ab8c5f485']
    }
  }
}