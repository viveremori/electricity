var orderSum             = 7000
    ,deliverySum 		 = 40
	,discount    		 = 0
	,vipClient        	 = true
	,vipClientDiscount   = 3
	,promoCodeDiscount   = 5
	;

	if(orderSum >= 500) {
		console.log("Free delivery");
		deliverySum = 0;
	}
	else{
		console.log("The cost of the delivery:", deliverySum, "hrn");
	}
	
	if(orderSum >= 700 && orderSum < 2000) {
		discount = 3;
	}
	else if(orderSum >= 2000 && orderSum < 5000) {
		discount = 5;
	}
	else if(orderSum >= 5000) {
	discount = 7;	
	     if(vipClient){
			 discount += vipClientDiscount;
			 console.log("Additional discount, as a VIP Client:", vipClientDiscount, "3%!");
			 }
	}
	
	if(promoCodeDiscount){
	   discount += promoCodeDiscount;
	   console.log("You have an additional discount thanks to Promocode:", promoCodeDiscount, "%");
	}
	
	
console.log("The sum of the order:", orderSum);
	orderSum -= orderSum * discount / 100; // orderSum - orderSum * discount
	
console.log("Discount:", discount, "%");
console.log("The sum of the order with the discount:", orderSum, "hrn");

orderSum += deliverySum;
console.log("The sum of the order including delivery:", orderSum, "hrn");

