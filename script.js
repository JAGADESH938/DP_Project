function calculateTax() {
    var arvInput = document.getElementById('arv');
    var arv = parseFloat(arvInput.value);
    
    if (isNaN(arv)) {
        alert("Please enter a valid number for ARV.");
        return;
    }
    
    var taxAmount = arv * 0.035;
    
    var taxAmountElement = document.getElementById('taxAmount');
    taxAmountElement.textContent = taxAmount.toFixed(2);
}
