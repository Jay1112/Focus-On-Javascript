// What is Promise
// A Promise is an object representing eventual completion or failure of an asynchronous operation.

// Promise has 3 states
// 1. Pending
// 2. Resolved
// 3. Rejected

// promise objects are immutable.

// Promise Chaining
// Promise chaining solves the problem of callback hell and inversion of control
// to pass data from one chain to another chain you have to return a promise to pass from one chain to another

// catch handles all the errors of then chains which come before it and after its previous catch chain
/*

then - 1
then - 2
catch - 1
then - 3
then - 4
catch - 2
then - 5

catch - 1 handles errors of then-1, then-2
catch - 2 handles errors of then-3, then-4

then-5 will be executed everytime because there is a no catch handlers for it
*/

let cart = ["Shoes", "T-shirt", "Chair"];

function isValidOrder(cart) {
  return true;
}

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!isValidOrder(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
      return;
    }

    const orderId = prompt("Enter OrderId : ");
    resolve(orderId);
  });
}

function proceedToPayment(orderId) {
  console.log("Payment in Progress...");
  return new Promise(function (resolve, reject) {
    const paymentInfo =
      "Payment of $100 is Successful for OrderId : " + orderId;
    setTimeout(() => {
      resolve({ paymentInfo, amount: 100 });
    }, 5000);
  });
}

createOrder(cart)
  .then(function (orderId) {
    console.log("Order : ", orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (payment) {
    console.log(payment.paymentInfo);
    return payment.amount;
  })
  .then(function (amount) {
    const totalBalance = 1000 - amount;
    console.log("Wallet Balance : ", totalBalance);
  })
  .catch((err) => {
    console.log(err.message);
  })
