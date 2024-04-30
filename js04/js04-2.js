class ia_BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new ia_BankAccount(1000);
account.deposit(100);
console.log(account.getBalance());
account.withdraw(50);
console.log(account.getBalance()); // الطريقة الصحيحة
console.log(account.balance); // الطريقة الخطأ