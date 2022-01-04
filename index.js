function formatMoney(value){
    value = Math.ceil(value*100) / 100; // because we want to make sure it always rounds up
    value = value.toFixed(2);
    return '$ ' + value;
}

function formatSplit(value){
    if(value === "1"){
        return value + ' person';
    }
    return value + ' people'
}

function update(){
    let bill = Number(document.getElementById("yourBill").value); // because the input is actually a string so we have to convert it to number
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;
    // a tip is to log your variables in an object to read better:
    // console.log({bill, tipPercent, split});

    let tipValue = bill * (tipPercent/100);
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split;

    // now we have to pass the data to the user interface:
    document.getElementById('tipPercent').innerHTML = tipPercent + '%';
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
    document.getElementById('totalWithTip').innerHTML = formatMoney(bill + tipValue);
    document.getElementById('splitValue').innerHTML = formatSplit(split);
    document.getElementById('billEach').innerHTML = formatMoney(newBillEach);
    document.getElementById('tipEach').innerHTML = formatMoney(tipEach);

}

let container = document.getElementById('container');
container.addEventListener('input', update);
// listening to the element type, call the function