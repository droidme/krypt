// https://eth-ropsten.alchemyapi.io/v2/Us48v0peDauzSyribVGdIuA9YnFUFtnz

require('@nomiclabs/hardhat-waffle');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  solidity: '0.8.1',
  networks: {
    ropsten: {
      url: `${process.env.ALCHEMY}`,
      accounts: [`${process.env.ACCOUNT2}`]
    }
  }
}