import { WalletConnect } from "@thirdweb-dev/wallets";
 
const wallet = new WalletConnect();
 
wallet.connect();

function addListener(
  event: T,
  fn: (
    ...args: ArgumentMap<WalletEvents>[Extract<T, keyof WalletEvents>]
  ) => void,
  context?: any,
): this;

function getBalance(
  tokenAddress: string,
): Promise<{
  decimals: number;
  displayValue: string;
  name: string;
  symbol: string;
  value: BigNumber;
}>;

function signMessage(message: string | Bytes): Promise<string>;


function getChainId(): Promise<number>;



function transfer(
  to: string,
  amount: string | number,
  currencyAddress: string,
): Promise<Omit<TransactionResultWithMetadata<unknown>, "data">>;


let qrcode: undefined | boolean;
