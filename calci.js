//the main calci func to concatenate, delete or evaluate the string according to the input character typed
	function valu(val){
		var temp=document.getElementById("result").value;
		if(val=="cancel"){
			document.getElementById("result").value=" ";
			}
		else if(val=="delete"){
			
			document.getElementById("result").value=temp.substr(0,temp.length-1);
			}
		else if(val=="="){
			document.getElementById("result").value=eval(temp);
			}
		else document.getElementById("result").value+=val;
	}