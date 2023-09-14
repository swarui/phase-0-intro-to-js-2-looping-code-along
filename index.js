// Code your solutions in this file
const names=["Guadalupe", "Ollie", "Aki"];
const events ='surprise';

  function writeCards(){
    let newarray=[];
    for(let i=0; i < names.length; i++){
        newarray.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return newarray;
  }
  console.log(writeCards(names,events));

  function countDown(positiveNumber){
    while (positiveNumber >=0){
        console.log(positiveNumber)
        positiveNumber--;
    }
  }
  console.log(countDown(10));