import { NetworkType } from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

const options = {
  name: "Test",
};

const rpcUrl = "https://mainnet-tezos.giganode.io/";
const wallet = new BeaconWallet(options);

const getActiveAccount = async () => await wallet.client.getActiveAccount();

const requestPermissions = async () => {
  await wallet.requestPermissions({
    network: {
      type: NetworkType.MAINNET,
      rpcUrl,
    },
  });
};

const getUserBalance = async (address) => {
  const tezos = new TezosToolkit(rpcUrl);
  const balance = await tezos.tz.getBalance(address);
  return balance.toNumber() / 1000000;
};

const connectWallet = async () => {
  await requestPermissions();
  const { address } = await getActiveAccount();
  const balance = await getUserBalance(address);
  return { address, balance };
};

const disconnectWallet = async () => {
  await wallet.clearActiveAccount();
};

export { connectWallet, disconnectWallet };
