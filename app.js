const input = prompt("Введите целые цифры, через запятую");

const numberArr = input.split(",").filter(el=>!isNaN(el)).map(el=>Number(el));
console.log(numberArr);
sortArr = numberArr.sort((x,y)=>x-y);
console.log(sortArr);
console.log("min: "+sortArr[0]);
console.log("max: "+sortArr[sortArr.length-1]);

const sumN = sortArr.reduce((acc,x)=>acc+x,0);
console.log("sum: "+sumN);
console.log("avg: "+sumN/sortArr.length);
