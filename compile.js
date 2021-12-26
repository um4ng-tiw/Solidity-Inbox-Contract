// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol"); // We use this to make this line platform independent
const source = fs.readFileSync(inboxPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Inbox"];
