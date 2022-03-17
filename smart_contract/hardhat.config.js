// https://eth-ropsten.alchemyapi.io/v2/Us48v0peDauzSyribVGdIuA9YnFUFtnz

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Us48v0peDauzSyribVGdIuA9YnFUFtnz',
      accounts: ['36a8f880e19f9fd42f98e768218229d728047f915413dc3e4b1c56ffc5444a0d']
    }
  }
}