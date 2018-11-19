var electricity = 100
	,extraElectricity = 20
    ,kilowatt = 100
	,result = 0.9
	,result1 = 1.68
	,largeFamily = true
	,sum = 0
	,plus = 0
	;
	
	if(electricity + extraElectricity <=100) {
		console.log("Тарифы на электричество составляют", result, "грн", "за потребление в месяц до", kilowatt, "кВт*час в месяц");
	}
	
	else if(electricity + extraElectricity >=100) {
		console.log("Тарифы на электричество составляют", result1, "грн", "за потребление в месяц свыше", kilowatt, "кВт*час в месяц")
	}	

	sum = electricity * result + extraElectricity * result1;
	console.log("Итоговое потребление - ", electricity + extraElectricity, "кВт");
	console.log("Оплата до", kilowatt, "кВт*ч - ", electricity * result, "грн. за", electricity, "кВ*ч");
	console.log("Оплата сверх", kilowatt, "кВт*ч - ", extraElectricity * result1, "грн. за", extraElectricity, "кВт*ч");
	sum = electricity * result + extraElectricity * result1;
	console.log("Итого к оплате - ", sum, "грн.");
	
		
	if(largeFamily) { 
		console.log("Многодетные семьи оплачивают всю потребляемую энергию по единому тарифу -", result, "копеек кВт*час в месяц");
		 
	console.log("Итоговое потребление - ", electricity + extraElectricity, "кВт");
	console.log("Оплата до", kilowatt, "кВт*ч - ", electricity * result, "грн. за", electricity, "кВ*ч");
	console.log("Оплата сверх", kilowatt, "кВт*ч - ", extraElectricity * result, "грн. за", extraElectricity, "кВт*ч");
	sum = electricity * result + extraElectricity * result;
	console.log("Итого к оплате - ", sum, "грн.");	
	}