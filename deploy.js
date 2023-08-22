const HDWalletProvider = require('@truffle/hdwallet-provider');
const {Web3} = require('web3');

const {abi, evm} = require('./compile');

provider = new HDWalletProvider(
    'forest discover addict zoo recall sustain swamp enough vessel chuckle oxygen wrestle',
    'https://sepolia.infura.io/v3/cc52cc7226bc4070a6eced5a1cefd99a'
);

const web3 = new Web3(provider);

;(async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object, arguments: ['Hello there!']})
        .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
})();
