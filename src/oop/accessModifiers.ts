class BankAccount {
  constructor(
    public readonly accountNumber: string,
    public readonly name: string,
    private _balance: number,
    protected accountType: string = "Savings"
  ) {}
  public getBalance(): number {
    return this._balance;
  }
  public deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance is ${this._balance}.`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }
}

class StudentAccount extends BankAccount {
  constructor(
    accountNumber: string,
    name: string,
    balance: number,
    public readonly studentId: string,
    protected accountType: string = "Student Savings"
  ) {
    super(accountNumber, name, balance, accountType);
  }
  public getStudentId(): string {
    return this.studentId;
  }
  setAccountType(newType: string): void {
    if (newType === "Student Savings" || newType === "Regular Savings") {
      this.accountType = newType;
    } else {
      console.log("Invalid account type.");
    }
  }
}

// Usage examples outside the class definitions
const accountOne = new BankAccount("123456789", "John Doe", 1000, "Savings");
accountOne.deposit(500); // Deposited 500. New balance is 1500.
console.log(accountOne.getBalance()); // 1500

const studentAccount = new StudentAccount(
  "987654321",
  "Jane Smith",
  2000,
  "S12345"
);
studentAccount.deposit(300); // Deposited 300. New balance is 2300.
console.log(studentAccount.getBalance()); // 2300
console.log(studentAccount.getStudentId()); // S12345
studentAccount.setAccountType("Regular Savings");
