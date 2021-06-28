export default interface Transaction {
  id: string;
  qty: number;
  type: string;
  product: string;
  date: Date;
  total: number;
}
