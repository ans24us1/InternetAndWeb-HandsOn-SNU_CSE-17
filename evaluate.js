function Evaluate(studentnumber){
	var iwstest=true;
	console.log("Student is admitted for evaluation",studentnumber);
		if(studentnumber%2==0)
			console.log("Evaluation Complete");
		else{
			
			Code(function(){
				console.log("Student is Coding",studentnumber);
				iwstest=true;
			});
		}
}
function Code(callback)
{
	setTimeout(callback,7000);
}
Evaluate(1);Evaluate(2);Evaluate(3);Evaluate(4);Evaluate(5);Evaluate(6);