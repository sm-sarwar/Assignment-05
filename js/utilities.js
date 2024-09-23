function inputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseInt(inputValue);
    return inputNumber;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseInt(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}
function getStringValueById(id){
    const stringValue = document.getElementById(id).innerText;
    return stringValue;
}