function BankAccount(name, initialDeposit){
  this.name = name;
  this.balance = initialDeposit;
};
BankAccount.prototype.deposit = function (depositAmt) {
  this.balance += depositAmt;
};
