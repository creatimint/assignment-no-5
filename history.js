
const donateButton = document.getElementById('donate-button').addEventListener('click', function(){
    
    const donateInput =getInputAmountById('donate-for-noakhali-input');
    const donatedAmount =getInputTextById('donated-amount');
    const myBalance = getInputTextById('my-balance')
    
    if(isNaN(donateInput) || donateInput <= 0){
        alert('invalid Input')
    }
    else if(!isNaN(donateInput)){

        if(myBalance < donateInput){
            alert('Not Enough Balance')
            return ("You don't have enough money");
        }
        const totalDonate = donatedAmount + donateInput;
        document.getElementById('donated-amount').innerText = totalDonate;

        const currentBalance = myBalance - donateInput;
        document.getElementById('my-balance').innerText = currentBalance;
        console.log(donateInput, donatedAmount, totalDonate, myBalance, currentBalance)

        
    }
    else{
        alert('invalid Input')
    }
    
});

