function calculator(args){

let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);

return num1 + num2;

}

console.log(calculator(process.argv.slice(2)));