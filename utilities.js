function getInputAmountById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function getInputTextById(id){
    const inputText = parseFloat(document.getElementById(id).innerText);
    return inputText;
}

function showSectionById(id){
    // hide all section //
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    // show section by given parameter // 
    document.getElementById(id).classList.remove('hidden')
}

