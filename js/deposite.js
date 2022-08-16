// step -1: add even listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click', function () {
    // step-2: get the deposite amount from the deposite input field
    const depositeField = document.getElementById('deposite-field');
    // for input field use .value to get text from an input field
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    //step-3: get the current deposite total amount
    const depositeTotalElement = document.getElementById('deposite-total');
    //for non-input(element other than input, textarea) user innerText to get the text
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    //step-4: add numbers to set the total deposite
    const currentDeposite = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = currentDeposite;

    //step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7:clear the input field
    depositeField.value = '';
})