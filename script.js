let billInput=document.getElementById('billTotalInput');
let tipInput=document.getElementById('tipInput');
let perHeadOutput=document.getElementById('perHead');
let count=document.getElementById('count');

function totCalculate(){
    let bill=Number(billInput.value);
    let tip=Number(tipInput.value);
    let noOfPeople=Number(count.innerText)
    let total=(bill+tip)/noOfPeople;
    total=Math.round((total+Number.EPSILON)*100)/100;
    perHeadOutput.innerText=total;
}

function countPlus(){
    let incDec=Number(count.innerText)+1;
    count.innerText=incDec;
    totCalculate();

}

function countMinus(){
    let incDec=Number(count.innerText)-1;
    if(incDec>=1){
        count.innerText=incDec;
    }
    totCalculate();
}
