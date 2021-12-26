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
