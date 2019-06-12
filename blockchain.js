const Block = require("./block");
const Datee = require("./date");

module.exports = class Blockchain{
    constructor(){
        this.chain = [this.createGenesis()];
    }

    createGenesis(){
        return new Block(Datee.getCurrectDate(), "Genesis block", 0, "0");
    }

    latestBlock(){
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock){
        if(this.chain.length > 0){
            const latestBlock = this.latestBlock();
            newBlock.previousHash = latestBlock.hash;
            newBlock.index = latestBlock.index + 1;
        }
            
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    checkValid(){
        for(let i=1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            debugger;
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}