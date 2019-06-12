const Blockchain = require("./blockchain");
const Block = require("./block");
const Datee = require("./date");

let jsChain = new Blockchain();
jsChain.addBlock(new Block(Datee.getCurrectDate(), {amount: 5}));
jsChain.addBlock(new Block(Datee.getCurrectDate(), {amount: 10}));

console.log(JSON.stringify(jsChain, null, 4));
console.log("Is blockchain valid? " + jsChain.checkValid());