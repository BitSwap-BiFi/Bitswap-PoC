const bitmask = require('bitmask.js');

export type SaveMnemonicSeed = MnemonicSeedData;
export type GetWalletData = WalletData;
export type ListAssets = Asset[];
export type ImportAsset = Asset;
export type GetBlindedUtxo = BlindingUtxo;
export type SendSats = TransactionData;
export type SignPsbt = TransactionData;
export type FundVault = FundVaultDetails;
export type GetAssetsVault = FundVaultDetails;
export interface CreateAsset {
  genesis: string;
  id: string;
  asset_id: string;
  schema_id: string;
}
export type TransferAssets = TransfersSerializeResponse;
export interface ValidateTransfer {
  txid: string;
  height: number;
}
export interface AcceptTransaction {
  accept: string;
  id: string;
}
export interface CreateWalletResponse {
  username?: string;
  error?: string;
}
export type AuthResponse = ErrorResponse | AuthResponseOk;
export interface AuthResponseOk {
  refresh: string;
  token: string;
}
export interface ErrorResponse {
  error: string;
}
export interface Account {
  account_id: string;
  balance: string;
  currency: string;
}
export interface Money {
  value: string;
  currency: string;
}
export interface AddInvoiceResponse {
  req_id: string;
  uid: number;
  payment_request: string;
  meta: string;
  metadata: string;
  amount: Money;
  rate: string;
  currency: string;
  target_account_currency: string;
  account_id: string;
  error: string;
  fees: string;
}
export interface LnTransaction {
  txid: string;
  fee_txid: string;
  outbound_txid: string;
  inbound_txid: string;
  created_at: bigint;
  date: number;
  outbound_amount: string;
  inbound_amount: string;
  outbound_account_id: string;
  inbound_account_id: string;
  outbound_uid: number;
  inbound_uid: number;
  outbound_currency: string;
  inbound_currency: string;
  exchange_rate: string;
  tx_type: string;
  fees: string;
  reference: string;
}
export interface LnWalletData {
  balance: Account;
  transactions: LnTransaction[];
}
export interface PayInvoiceResponse {
  payment_hash: string;
  uid: number;
  success: boolean;
  currency: string;
  payment_request: string;
  amount: Money;
  fees: Money;
  error: string;
  payment_preimage: string;
  destination: string;
  description: string;
}
export interface CheckPaymentResponse {
  paid: boolean;
}
//# sourceMappingURL=types.d.ts.map
