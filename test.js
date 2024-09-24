<script>
// Helper function to get input value
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}

// Function to get the current donated amount from the card
function getDonatedAmount(id) {
    return parseFloat(document.getElementById(id).innerText);
}

// Function to get the current balance
function getBalance() {
    return parseFloat(document.getElementById("my-balance").innerText);
}

// Function to set the new balance
function updateBalance(newBalance) {
    document.getElementById("my-balance").innerText = newBalance;
}

// Function to set the new donated amount
function updateDonatedAmount(id, newAmount) {
    document.getElementById(id).innerText = newAmount;
}

// Function to handle donations
function handleDonation(inputId, donatedAmountId) {
    const donateInput = getInputValue(inputId);  // Get the input donation value
    const currentDonatedAmount = getDonatedAmount(donatedAmountId);  // Get the current donated amount
    const balance = getBalance();  // Get the user's current balance

    // Validate the donation input
    if (isNaN(donateInput) || donateInput <= 0) {
        alert("Invalid donation amount.");
        return;
    }

    // Check if the user has enough balance
    if (donateInput > balance) {
        alert("Insufficient balance for this donation.");
        return;
    }

    // Calculate the new donated amount and update it
    const newDonatedAmount = currentDonatedAmount + donateInput;
    updateDonatedAmount(donatedAmountId, newDonatedAmount);

    // Deduct the donation from the balance and update it
    const newBalance = balance - donateInput;
    updateBalance(newBalance);
}

// Event listener for Noakhali donation button
document.getElementById("donate-button").addEventListener("click", function () {
    handleDonation("donate-for-noakhali-input", "donated-amount");
});

// Event listener for Feni donation button
document.getElementById("donate-for-feni-btn").addEventListener("click", function () {
    handleDonation("donate-for-feni-input", "donated-amount2");
});
</script>
