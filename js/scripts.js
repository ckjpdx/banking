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
    var userName = $('#input-new-user').val();
    var initialDeposit = $('#input-initial-deposit').val();
    var newUser = new BankAccount(userName, initialDeposit);
    event.preventDefault();
  });

});
