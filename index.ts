import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import { airdrop } from "../airdrop";

export const showBalance = async (publicKey: PublicKey) => {
    const connection = new Connection("http://127.0.0.1:8899", "confirmed");
    const response = await connection.getAccountInfo(publicKey);
    return response.lamports / LAMPORTS_PER_SOL;
}
(async () => {
    const publicKey = "4658ZW5WaNCps9rPWauL5TBk94SwMMKTk3yWK8PzXufG";
    const balance = await showBalance(new PublicKey(publicKey))
    console.log(`The balance for the key ${publicKey} is ${balance}`)
    await airdrop(publicKey, 5)
    const updateBalance = await showBalance(new PublicKey(publicKey))
    console.log(`Updated balance is ${updateBalance}`);
    
})()

