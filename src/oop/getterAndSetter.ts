class BankAccountInfo {
  constructor(
    public readonly accountNumber: string,
    public readonly name: string,
    private _balance: number,
    protected accountType: string
  ) {}

  // Getter for balance
  public get balance(): number {
    return this._balance;
  }

  // Setter for balance
  public set deposit(amount: number) {
    if (amount > 0) {
      this._balance += amount;
    } else {
      console.log("Deposit amount must be positive.");
    }
  }
}

const accountInfo = new BankAccountInfo(
  "123456789",
  "John Doe",
  1000,
  "Savings"
);

console.log(accountInfo.balance); // 1000
console.log((accountInfo.deposit = 550)); // undefined (setter does not return a value)
console.log(accountInfo.balance); // 1550
