function BankAccount(user, initialDeposit){
  this.user = user;
  this.balance = initialDeposit;
};
BankAccount.prototype.deposit = function (depositAmt) {
  this.balance += depositAmt;
};
BankAccount.prototype.withdraw = function (withdrawAmt) {
  this.balance -= withdrawAmt;
};



// FRONTEND
$(document).ready(function() {
  var accounts = [];
  $("#register-form").submit(function(event) {
    event.preventDefault();
    var userName = $('#input-new-user').val();
    var initialDeposit = parseInt($('#input-initial-deposit').val());
    var newAccount = new BankAccount(userName, initialDeposit);
    accounts.push(newAccount);
    $('#balance-span').text(initialDeposit);
  });
  $("#transfer-form").submit(function(event) {
    event.preventDefault();
    var existingUser = $('#input-existing-user').val();
    var inputDeposit = parseInt($('#input-deposit').val());
    var inputWithdraw = parseInt($('#input-withdraw').val());
    accounts.forEach(function(account){
      debugger;
      if (existingUser === account.user){
        if (inputDeposit) {
          account.deposit(inputDeposit);
        }
        if (inputWithdraw) {
          account.withdraw(inputWithdraw);
        }
        $('#balance-span').text(account.balance);
      } // end forEach
    });
  });

});
