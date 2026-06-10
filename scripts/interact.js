const { ethers } = require("hardhat");

async function main() {
    console.log("Interacting with SimpleStorage contract...");

    const contractAddress = process.env.SIMPLE_STORAGE_CONTRACT_ADDRESS;
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");

    const simpleStorage = await SimpleStorage.attach(contractAddress);

    const storeValue = await simpleStorage.store(42);
    await storeValue.wait(); 

    const retrievedValue = await simpleStorage.retrieve();
    console.log("Retrieved value from contract:", retrievedValue.toString());
    
}


main().catch((error) => {
    console.error(error); 
    process.exitCode = 1;
});
