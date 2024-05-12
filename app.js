let errorMsg = document.querySelectorAll('.error-msg')
let calValue = document.querySelectorAll('.cal-value')
let inpValue = document.querySelectorAll('input')

function addnumber(){
    let calValueEl = inpValue[0].value
    printMessage(calValueEl,"+")
}
function subnumber(){
    let calValueEl = inpValue[0].value
    printMessage(calValueEl,"-")
}
function clearbtn(){
    errorMsg[0].innerHTML = ''
    inpValue[0].value = ''
    calValue[0].innerHTML = '0'
}



function printMessage(formVal, operator) {
    let calValueEl = inpValue[0].value
if(isNaN(calValueEl)){
    errorMsg[0].innerHTML=  `<b>Alert! </b>"PLEASE ENTER A VALID NUMBER"`
    inpValue[0].value = ''
    calValue[0].innerHTML = '' 
}    
else if (operator === "+"){
    calValue[0].innerHTML = Number(calValue[0].innerHTML) + Number(formVal)
    errorMsg[0].innerHTML = ''
    inpValue[0].value = ''

}
else if (operator === "-"){
    calValue[0].innerHTML = Number(calValue[0].innerHTML) - Number(formVal)
    errorMsg[0].innerHTML = ''
    inpValue[0].value = ''

}


}