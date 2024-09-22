/*
*For Noakhali
*
*/
document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
    const  addDonation = inputFieldValueById('noakhali-input-filed');
    const currentDonation = getTextValueById('noakhali-current-tk');
    const totalCurrentDonation = getTextValueById('total-current-donation');
    
     
    if(typeof addDonation == 'number' && addDonation > 0 ){
        const newDonation = addDonation + currentDonation;
        console.log(newDonation);
        document.getElementById('noakhali-current-tk').innerText = newDonation;
        const finalDonation = totalCurrentDonation - addDonation;
        document.getElementById('total-current-donation').innerText= finalDonation;
    }
    else{
        alert('Please enter a valid number!');
    }
})

/*
*For Feni
*
*/
document.getElementById('feni-donate-btn').addEventListener('click',function(){
    const  addDonation = inputFieldValueById('feni-input-filed');
    const currentDonation = getTextValueById('feni-current-tk');
    const totalCurrentDonation = getTextValueById('total-current-donation');
    
     
    if(typeof addDonation == 'number' && addDonation > 0 ){
        const newDonation = addDonation + currentDonation;
        console.log(newDonation);
        document.getElementById('feni-current-tk').innerText = newDonation;
        const finalDonation = totalCurrentDonation - addDonation;
        document.getElementById('total-current-donation').innerText= finalDonation;
    }
    else{
        alert('Please enter a valid number!');
    }
})

/*
*For Quota movement
*
*/
document.getElementById('quota-donate-btn').addEventListener('click',function(){
    const  addDonation = inputFieldValueById('quota-input-filed');
    const currentDonation = getTextValueById('quota-current-tk');
    const totalCurrentDonation = getTextValueById('total-current-donation');
    
     
    if(typeof addDonation == 'number' && addDonation > 0 ){
        const newDonation = addDonation + currentDonation;
        console.log(newDonation);
        document.getElementById('quota-current-tk').innerText = newDonation;
        const finalDonation = totalCurrentDonation - addDonation;
        document.getElementById('total-current-donation').innerText= finalDonation;
    }
    else{
        alert('Please enter a valid number!');
    }
})