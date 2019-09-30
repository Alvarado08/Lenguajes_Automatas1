let number = 10;
if(number >= 10 && number <= 100)
{
    console.log("El numero esta en rango del 10 al 100");
}else{
    console.log("Numero fuera de rango 10 al 100");
}

let n = 0;
while (n <= 12)
{
    console.log("While " + n);
    n = n + 2;
}

let money = 1;
for (let counter = 0; counter < 52; counter++)
{
    money += counter;
}
console.log("For " + money);