var num1 = 5
    ,num2 = 7
	,result = 0
	,message = "Result: "
	;
	
	console.log("num1 =", num1, "num2 = ", num2, "result =", result);
result = num1 + num2;
console.log(num1, " + ", num2, "=", result);

result += 2; //result = result + 2;
console.log("result += 2:", result);

// result ++; // result = result +1; result +=1;
++ result; // it's not important where to put ++ in this case
console.log("result ++:", result);


num1 = 1;
num2 = 1;
result = 0;

console.log("num1 =", num1, "num2 = ", num2, "result =", result);

result = num1 ++;  // сначала присваеваем потом увеличиваем)
console.log("num1 =", num1, "num2 = ", num2, "result =", result);

result = ++ num2; // сначала увеличиваем потом присваиваем)
console.log("num1 =", num1, "num2 = ", num2, "result =", result);

console.log("num1 == num2:", num1 == num2); //checked if it's equal
console.log("num1 != num2:", num1 != num2); 


console.log("num1 === num2:", num1 === num2); //строгое сравнение

num2 = "2";
console.log("num1 == num2:", num1 == num2); //сравнение по значению (они оба два)
console.log("num1 === num2:", num1 === num2); //сравнение по значению и по типу (во втором кавычки, то есть двойка как символ)

result = num1 + num2; // +  - склеивание, конкатенация
console.log("num1 =", num1, "num2 = ", num2, "result =", result);

result = num1 + (+ num2); // + num2 - приводим строку к числу
console.log("num1 =", num1, "num2 = ", num2, "result =", result); // приводим строку к числу)

message += result + " :)"; // дописывание текста в конце строки
console.log(message);





