const hre = require("hardhat");

async function main() {
    console.log("Deploying BMToken contract...");

    const BMToken = await hre.ethers.getContractFactory("BMToken");
    const [deployer] = await hre.ethers.getSigners();
    const address = await deployer.getAddress();

    const bmToken = await BMToken.deploy(address);
    console.log("Deploying from:", address);
    await bmToken.waitForDeployment();

    console.log("BMToken deployed to:", await bmToken.getAddress());
    
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
}); 