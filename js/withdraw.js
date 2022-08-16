/**
 1. add event handler with the withdraw button
 2. get the withdraw amount from the withdraw input field
 2.5 also make sure to convert the input a number by using parseFloat
 3. Get the previous withdraw total
 4. calculate the total withdraw amount
 4.5 set total witdraw amount
 5. get the previous balance total
 6. calculate new balance
 6.5 set the new balance total
 7.clear the input field
 */

//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-7:
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide a Valid Number');
        return;
    }

    //step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    //step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Bap er Bank e eto TK nai');
        return;
    }

    //step -4:
    const currentWithdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdraw;

    //step-6
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;



})