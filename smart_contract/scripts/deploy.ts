import { ethers, hardhatArguments } from 'hardhat';

async function main() {
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);

    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();
    console.log('Floppy address: ', transactions.address);
    
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});
