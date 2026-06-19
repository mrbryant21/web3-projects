const hre = require("hardhat");

async function main() {

    const contractAddress = process.env.BMTOKEN_CONTRACT_ADDRESS;
    const receipientAddress = process.env.BMTOKEN_RECIPIENT_ADDRESS;

    const BMToken = await hre.ethers.getContractFactory("BMToken");

    const bmToken = await BMToken.attach(contractAddress);

    const amount = hre.ethers.parseUnits("1000", 18);

    const tx = await bmToken.mint(receipientAddress, amount);
    await tx.wait();

    console.log(`Minted ${amount} tokens to ${receipientAddress}`);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
