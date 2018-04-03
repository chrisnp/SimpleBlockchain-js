const CryptoJS = require("crypto-js")

class Block {

    constructor(index, prevHash, timestamp, data, hash) {
        this.index = index
        this.prevHash = prevHash
        this.timestamp = timestamp
        this.data = data
        this.hash = hash.toString()
    }
   
}

let computeHash = (index, prevHash, timestamp, data) => {
    return CryptoJS.SHA256(index + prevHash + timestamp + data).toString()
}

let genesisBlock = () => {
    return new Block(0, "0", Date.now(), "Genesis Block", "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}

let blockchain = [genesisBlock]

let newBlock = (blockData) => {
    let prevBlock = blockchain[-1]
    let nextIndex = prevBlock.index + 1
    let nextTimestamp = new Date().getTime() / 1000
    let nextHash = computeHash(nextIndex, prevBlock.hash, nextTimestamp, blockData)
    return new Block(nextIndex, prevBlock.hash, nextTimestamp, blockData, nextHash)    
}


