import * as anchor from '@project-serum/anchor';
export interface HomeProps {
    candyMachineId?: anchor.web3.PublicKey;
    connection: anchor.web3.Connection;
    txTimeout: number;
    rpcHost: string;
  }

export interface AlertState {
  open: boolean,
  message: string,
  severity: string | undefined,
}