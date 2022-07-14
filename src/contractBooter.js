import TokenFactoryABI from "./TokenFactory.json";

export default function setupContracts (provider) {
    const tokenFactoryContract = new Contract(
        //@ts-ignore
      "TOKEN FACTORY ADDRESS",
      TokenFactoryABI.abi,
      provider
    );
    return tokenFactoryContract;
}