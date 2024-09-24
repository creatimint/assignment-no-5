

// History Button Function //
const historyButton = document.getElementById('history-button')
const donationButton = document.getElementById('donation-button')

historyButton.addEventListener('click', function(){

    historyButton.classList.remove('text-thirdColor', 'border')
    historyButton.classList.add('bg-primaryColor', 'font-semibold', 'text-secondColor')

    donationButton.classList.remove('text-secondColor', 'bg-primaryColor', 'font-semibold')
    donationButton.classList.add('text-thirdColor', 'border')
})




// Donate for Flood at Noakhali, Bangladesh //

const donateButton = document.getElementById('donate-button').addEventListener('click', function(){
    
    const donateInput =getInputAmountById('donate-for-noakhali-input');
    const donatedAmount =getInputTextById('donated-amount');
    const myBalance = getInputTextById('my-balance')
    
    if(isNaN(donateInput) || donateInput <= 0){
        alert("Don't mock with us")
    }
    else if(!isNaN(donateInput)){

        if(myBalance < donateInput){
            alert('Not Enough Balance')
            return ('');
        }
        const totalDonate = donatedAmount + donateInput;
        document.getElementById('donated-amount').innerText = totalDonate;

        const currentBalance = myBalance - donateInput;
        document.getElementById('my-balance').innerText = currentBalance;
    }
    else{
        alert('invalid Input')
    }  
});


// Donate for Flood Relief in Feni,Bangladesh //

const donateButton2 = document.getElementById('donate-for-feni-btn').addEventListener('click', function(){

    const donateInput2 = getInputAmountById('donate-for-feni-input');
    const donatedAmount2 = getInputTextById('donated-amount2');
    const myBalance = getInputTextById('my-balance')
    
    if(isNaN(donateInput2) || donateInput2 <=0){
        alert("Don't mock with us")
        return ("404 Error")
    }
    else if(!isNaN(donateInput2)){
        if(myBalance < donateInput2){
            alert('Not Enough Balance')
            return("You don't have enough money");
        }
        const totalDonate2 = donateInput2 + donatedAmount2;
        document.getElementById('donated-amount2').innerText = totalDonate2;

        const currentBalance2 = myBalance - donateInput2;
        document.getElementById('my-balance').innerText = currentBalance2;
    }
})

// Aid for Injured in the Quota Movement //

const donateButton3 = document.getElementById('donate-for-student-btn').addEventListener('click', function(){

    const donateInput3 = getInputAmountById('donate-for-student-input');
    const donatedAmount3 = getInputTextById('donated-amount3');
    const myBalance = getInputTextById('my-balance');

    if(isNaN(donateInput3) || donateInput3 <=0){
        alert("Don't mock with us")
        return("Don't mock with us")
    }
    else{
        if(myBalance < donateInput3){
            alert('Not enough balance')
            return ("Not Enough Money")
        }
        else{
            const totalBalance3 = donateInput3 + donatedAmount3;
            document.getElementById('donated-amount3').innerText = totalBalance3;

            const currentBalance3 =  myBalance - donateInput3;
            document.getElementById('my-balance').innerText = currentBalance3;
        }
    }
})