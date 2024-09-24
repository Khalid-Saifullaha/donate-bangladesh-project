// Blog button
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = './home.html';
})

// Noakhali

document.getElementById('donation-tab').addEventListener('click', function(){
    const amount = parseFloat(document.getElementById('amount').value);
    const found = parseFloat(document.getElementById('found-btn').innerText);
    const myBalance = document.getElementById('my-balance').innerText;
     
    const donateAmount = amount + found;
    console.log(donateAmount);
    const newBalance = myBalance - amount;
    // console.log(found); 

    if(amount <= 0 || isNaN(amount)){
        alert('Invalid Donation Amount')
        return;
    }
    else{
        my_modal.showModal();
    }
    document.getElementById('my-balance').innerText = newBalance;
    document.getElementById('found-btn').innerText = donateAmount;
})

// Fani

document.getElementById('donation-tab-fani').addEventListener('click', function(){
    const amountFani = parseFloat(document.getElementById('amount-fani').value);
    const foundFani = parseFloat(document.getElementById('found-btn-fani').innerText);
    const myBalance = document.getElementById('my-balance').innerText;
     
    const donateAmountFani = amountFani + foundFani;
    console.log(donateAmountFani);
    const newBalance = myBalance - amountFani;
    // console.log(found); 
    
    if(amountFani <= 0 || isNaN(amountFani)){
        alert('Invalid Donation Amount')
        return;
    }
    else{
        my_modal.showModal();
    }

    document.getElementById('my-balance').innerText = newBalance;
    document.getElementById('found-btn-fani').innerText = donateAmountFani;
})

// Quota

document.getElementById('donation-tab-quota').addEventListener('click', function(){
    const amountQuota = parseFloat(document.getElementById('amount-quotq').value);
    const foundQuota = parseFloat(document.getElementById('found-btn-quota').innerText);
    const myBalance = document.getElementById('my-balance').innerText;
     
    const donateAmountQuota = amountQuota + foundQuota;
    console.log(donateAmountQuota);
    const newBalance = myBalance - amountQuota;
    // console.log(found); 

    if(amountQuota <= 0 || isNaN(amountQuota)){
        alert('Invalid Donation Amount')
        return;
    }
    else{
        my_modal.showModal();
        
    }
    
    document.getElementById('my-balance').innerText = newBalance;
    document.getElementById('found-btn-quota').innerText = donateAmountQuota;
})

document.getElementById('history-button').addEventListener('click', function(){
    document.getElementById('history-button').classList.add('bg-[#B4F461]',  'w-32');
    document.getElementById('donation-button').classList.remove('bg-[#B4F461]');
    document.getElementById('donate-page').classList.add('hidden');
  
  })
  
  document.getElementById('donation-button').addEventListener('click', function(){
      document.getElementById('donation-button').classList.add('bg-[#B4F461]');
      document.getElementById('history-button').classList.remove('bg-[#B4F461]');
      document.getElementById('donate-page').classList.remove('hidden');
  })

