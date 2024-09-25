// common function

function getInputFieldValueId(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;

    
}

function getInputFieldInnerTextById(id){
    const inputInnerText = parseFloat(document.getElementById(id).innerText);
    return inputInnerText;
    
}

function history(amount){
    const div = document.createElement('div');
    const now = new Date()
    const dateTimeString = now.toString();
    div.classList.add( 'flex', 'flex-col', 'gap-4', 'md:p-8', 'p-4', 'border-2', 'border-[#111111B3]', 'rounded-xl');
    div.innerHTML = `
        <h3 class="md:text-xl font-extrabold text-black">
            ${amount} Taka donated to: ${locationTitle}
        </h3>
        <p class="text-[#111111B3] bg-[#f9f7f3] rounded-lg px-4 py-2">Date : 
            ${dateTimeString}
        </p>   
    `;
    document.getElementById('history-se').appendChild(div);
}