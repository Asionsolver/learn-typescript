/**
 *@Getter & @Setter Practice
Create a BankAccount class with:

Private property _balance

Public getter balance to read the balance

Public methods deposit(amount) and withdraw(amount)

Ensure the balance can't go negative

 */

class BancAccount {
  private _balance: number;

  constructor(initialBalance: number = 0) {
    this._balance = initialBalance;
  }

  get balance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.error("You can not deposit under 1 Taka.");
    }
    this._balance += amount;
  }

  withdraw(amount: number): number | undefined {
    if (this._balance - amount < 0) {
      console.log("Insufficient funds");
      return;
    }
    if (amount <= 0) {
      console.error("You can not withdraw under 1 Taka.");
    }
    return (this._balance -= amount);
  }
}

const bankAccountOne = new BancAccount(4500);
console.log(bankAccountOne.balance);

bankAccountOne.deposit(1000);
console.log(bankAccountOne.balance);
bankAccountOne.withdraw(10000);
console.log(bankAccountOne.balance);
