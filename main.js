//Get month from user and find(winter, fall, summer)
   
	var a=prompt("enter the month");
	var b=new Date();
		b.setMonth(a)
	var month=b.getMonth(a);
	
   if(month<=4){
	document.write("summer");
	}

   else if(month>=4 && month<=08){
	document.write("winter");
	}
    else if(month>=9 && month<=12){
	document.write("fall");
	}
	else{
		document.write("only 12 months");
	}