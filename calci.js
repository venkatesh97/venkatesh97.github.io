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

	function sqrt(n){
	
	document.getElementById('result').value=Math.sqrt(n);
	}
	function cos(n){
	document.getElementById('result').value=Math.cos(n);
	}
	function sin(n){
	document.getElementById('result').value=Math.sin(n);
	}
	function tan(n){
	document.getElementById('result').value=Math.tan(n);
	}
	
	function fact(n){
		var temp=1;
		if(n>=1){
		for(var i=n;i>1;i--)
		{
		temp*=i;
		}
		document.getElementById('result').value=temp;
		}
		else if(n==0)	document.getElementById('result').value=temp;
		else document.getElementById('result').value="ERROR!!";
	}
	function log(x){
		document.getElementById('result').value=Math.log(x);
		}
	function sq(x){
	
	var y=document.getElementById('result').value;
	document.getElementById('result').value=y*y;
	}
	function cube(x){
	var y=document.getElementById('result').value;
	document.getElementById('result').value=y*y*y;
	}
	function resize(){
	if(windows.innerWidth<400)
	{	document.getElementById("sci").style.visibility="hidden";
     		document.getElementById("result").style.width=130 + 'px';

	}
	else {
		document.getElementById("sci").style.visibility="visible";
     		document.getElementById("result").style.width=170 +'px';
	}
	}
	