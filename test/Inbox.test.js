// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); //Constructor so capital. We will have to create an instance of Web3
const { abi, evm } = require("../compile"); //evm is containing the bytecode

// Here we create an instance of the Web3 library and
// provide a ganache local network provider to the constructor
// provider will change to rinkeby/ropstein to connect to the test n/w
const web3 = new Web3(ganache.provider());

const initialMessage = "Hello world Umang";
let fetchedAccounts;
let inbox;

beforeEach(async () => {
  // Getting list of all accounts from ganache
  fetchedAccounts = await web3.eth.getAccounts();
  // Use one of the accounts to deploy the contract
  inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: [initialMessage], //Arguments expected by the constructor function
    })
    .send({ from: fetchedAccounts[0], gas: "1000000" });
});

describe("Inbox contract", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });

  it("contains the initial message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, initialMessage);
  });

  it("changes the message", async () => {
    await inbox.methods
      .setMessage("New hello world")
      .send({ from: fetchedAccounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, "New hello world");
  });
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
