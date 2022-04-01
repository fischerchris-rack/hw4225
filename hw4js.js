function encrypted(){
	//accept data
	var a = document.getElementById("string").value;
	//set values for each encryption
	var MD5hash = CryptoJS.MD5(a);
	var SHA1hash = CryptoJS.SHA1(a);
	var AEShash = CryptoJS.AES.encrypt(a, "Fischer");
	var SHA2hash = CryptoJS.SHA256(a);
	//send data
	document.getElementById("MD5hash").innerHTML=MD5hash;
	document.getElementById("SHA1hash").innerHTML=SHA1hash;
	document.getElementById("AEShash").innerHTML=AEShash;
	document.getElementById("SHA2hash").innerHTML=SHA2hash;
}



function BinToDec(){
				//Checks for correct value
                var x = document.getElementById("conv").value;
                const regex = new RegExp('^[0-1]{1,}$','g');
                if(!regex.test(x)){
                    document.getElementById("decA").innerHTML = 'Error; only 0 or 1';
					}
				//Converts
                else{
					var num=x.split(""); 
					var powers=[];      
					var sum=0;
					var len=num.length;  

                    for(var i=0;i<num.length;i++){
                        powers.push(i);
						}
                    for(var i=powers.length-1;i>=0;i--){
                        sum+=Math.pow(2,i)*num[len-i-1];
						}
					//Prints
                    document.getElementById("decA").innerHTML = sum;
                }
            }    

function decToBin(){	
//get input
		num = document.getElementById("decimal").value;
		
		//convert
		let decB = (num % 2).toString();
			for (; num > 1; ) {
			num = parseInt(num / 2);
			decB =  (num % 2) + (decB);
    }
	//send to main
		document.getElementById("decB").innerHTML = decB

}
