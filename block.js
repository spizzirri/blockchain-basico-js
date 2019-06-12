const SHA256 = require('crypto-js/sha256');

module.exports = class Block{
    constructor(timestamp, data, index = null, previousHash = null){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString();
    }

    mineBlock(difficulty){

    }
    
}