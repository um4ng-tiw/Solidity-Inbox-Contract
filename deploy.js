// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const dotenv = require("dotenv").config();
const { interface, bytecode } = require("./compile");

// Takes mnemonic and url to network
const provider = new HDWalletProvider(
  process.env.MNEMONIC_PHRASE,
  process.env.CHAIN_URL
);

const web3 = new Web3(provider);

// Function created for using async/await code
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const deployment = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hello world"],
    })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", deployment.options.address);

  // To stop a hanging deployment
  provider.engine.stop();
};

deploy();
