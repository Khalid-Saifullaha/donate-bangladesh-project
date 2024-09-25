// Blog button
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = './home.html';
})

// Noakhali

document.getElementById('donation-tab').addEventListener('click', function(){
    const amount = getInputFieldValueId('amount');
    const found = getInputFieldInnerTextById('found-btn');
    const myBalance = getInputFieldInnerTextById('my-balance');
     
    const donateAmount = amount + found;

    const newBalance = myBalance - amount;

   
        if(amount <= 0 || isNaN(amount) || amount > myBalance){
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
    const amountFani = getInputFieldValueId('amount-fani');
    const foundFani = getInputFieldInnerTextById('found-btn-fani');
    const myBalance = getInputFieldInnerTextById('my-balance');
     
    const donateAmountFani = amountFani + foundFani;
    const newBalance = myBalance - amountFani;
    
    if(amountFani <= 0 || isNaN(amountFani) || amountFani > myBalance){
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
    const amountQuota = getInputFieldValueId('amount-quotq');
    const foundQuota = getInputFieldInnerTextById('found-btn-quota');
    const myBalance = getInputFieldInnerTextById('my-balance');
     
    const donateAmountQuota = amountQuota + foundQuota;
    const newBalance = myBalance - amountQuota;

    if(amountQuota <= 0 || isNaN(amountQuota) || amountQuota > myBalance){
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

