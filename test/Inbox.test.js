// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); //Constructor so capital. We will have to create an instance of Web3

// Here we create an instance of the Web3 library and
// provide a ganache local network provider to the constructor
// provider will change to rinkeby/ropstein to connect to the test n/w
const web3 = new Web3(ganache.provider());

beforeEach(() => {
  // Getting list of all accounts from ganache
  web3.eth.getAccounts().then((fetchedAccounts) => {
    console.log(fetchedAccounts);
  });
  // Use one of the accounts to deploy the contract
});

describe("Inbox contract", () => {
  it("deploys a contract", () => {});
});

// Demo tests

// class Car {
//   park() {
//     return "stopped";
//   }

//   drive() {
//     return "vroom";
//   }
// }

// let car;

// beforeEach(() => {
//   car = new Car();
// });

// describe("Testing the Car class", () => {
//   it("park works properly", () => {
//     assert.equal(car.park(), "stopped");
//   });

//   it("drive works properly", () => {
//     assert.equal(car.drive(), "vroom");
//   });
// });
