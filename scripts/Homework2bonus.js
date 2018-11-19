var  meat = 90
	,bonusMeat = 900
	,vegetablesFruitsGreens = 70
	,bonusVegetables = 700
	,dairy = 40
	,bonusDairy = 400
	,anyGroceries = 420
	,bonusAnyGroceries = 1260
	,bonus = 0
	,result = 0
	,bonus1 = 0.01
	,hrn = 0
	;
	
	
    if(meat >= 90) {
		console.log("Мясо на сумму от 90 грн.", "=", "+", bonusMeat, "баллов");
	}
	
	else if(meat <= 90)
	    {
		bonusMeat = 0;
		console.log("Вы получаете", bonus, "баллов за мясо, потому что сумма меньше 90 грн.");
		}
		
		
	if(vegetablesFruitsGreens >= 70) {
		console.log("Свежие овощи, фрукты и зелень на сумму от 70 грн.", "=", "+", bonusVegetables, "баллов");
		}	
	else if(vegetablesFruitsGreens <=70){
	    bonusVegetables = 0;
		console.log("Вы получаете", bonus, "баллов за мясо, потому что сумма меньше 70 грн.");
		}
			
		
		
	if(dairy >=40) {
		console.log("Кисломолочные продукты на сумму от 40 грн.", "=", "+", bonusDairy, "баллов");
		}	
	else if(dairy <=40){
	    bonusDairy = 0;
		console.log("Вы получаете", bonus, "баллов за мясо, потому что сумма меньше 40 грн.");
		}
			
		
		
	if(anyGroceries >=420) {
		console.log("Любые товары на сумму от 420 грн.", "=", "+", bonusAnyGroceries, "баллов");
		}	
	else if(anyGroceries <=420)	
	    {
	    bonusAnyGroceries = 0;
		console.log("Вы получаете", bonus, "баллов за все товары, потому что сумма меньше 420 грн.");
		}	
		
	result = bonusMeat + bonusVegetables + bonusDairy + bonusAnyGroceries;
	console.log("Всего действующих предложений", "=", result, "баллов");
	
	hrn = result / 100;
	console.log("Всего насчитано бонусов", "=", hrn, "грн.");
	
	
	
	