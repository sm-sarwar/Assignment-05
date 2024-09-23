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
        // Show for History 
        const donationTitle = getStringValueById('noakhali-donation-title');
        const currentDate = new Date()

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border rounded-xl p-5 space-y-2">
                <h5 class="text-3xl " > ${addDonation} Taka is Donated for ${donationTitle} </h5>
                <p> ${currentDate} </p>
            </div>
        `
        document.getElementById('history-section').appendChild(div);

        const modalButton = document.getElementById('noakhali-donate-btn');
        const modal = document.getElementById('my_modal_5');

       
        
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
        // Show For History 
        const donationTitle = getStringValueById('feni-donation-title');
        const currentDate = new Date()

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border rounded-xl p-5 space-y-2">
                <h5 class="text-3xl " > ${addDonation} Taka is Donated for ${donationTitle} </h5>
                <p> ${currentDate} </p>
            </div>
        `
        document.getElementById('history-section').appendChild(div);
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
        // Show For History 
        const donationTitle = getStringValueById('quota-donation-title');
        const currentDate = new Date()

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border rounded-xl p-5 space-y-2">
                <h5 class="text-3xl " > ${addDonation} Taka is Donated for ${donationTitle} </h5>
                <p> ${currentDate} </p>
            </div>
        `
        document.getElementById('history-section').appendChild(div);
    }
    else{
        alert('Please enter a valid number!');
    }
})

document.getElementById('show-donation').addEventListener('click',function(){
    showSectionById('donation-section');

    const donationBgChang = document.getElementById('show-donation');
    const historyBgChang = document.getElementById('show-history');
    historyBgChang.style.backgroundColor = '#1111110D';
    donationBgChang.style.backgroundColor = '#B4F461'

})

document.getElementById('show-history').addEventListener('click',function(){
    showSectionById('history-section');
    
    const donationBgChang = document.getElementById('show-donation');
    const historyBgChang = document.getElementById('show-history');
    historyBgChang.style.backgroundColor = '#B4F461';
    donationBgChang.style.backgroundColor = '#1111110D'
    
})

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = 'blog.html';
})


