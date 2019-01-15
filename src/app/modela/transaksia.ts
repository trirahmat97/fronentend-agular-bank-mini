import {Accounta} from './accounta';
export class Transaksia {
    idtransaction : number;
    amount : number;
    amountsign : string;
    type : string;
    date : Date;
    account : Accounta;
}