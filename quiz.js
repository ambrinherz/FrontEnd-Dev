

document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
	   
	   
	   sum = variable + sub + con + ifstate;
	   
	document.getElementById("grade").innerHTML = sum;

 grading = [
	   {score:0,feedback:"You seem to have no knowledge of javascript. Plese study and take the quiz later.", image: "none.jpg"},
	   {score:25,feedback:"You need to study more and take quiz again.", image: "poor.jpg"},
	   {score:50,feedback:"You could do better next time.", image: "avg.jpg"},
	   {score:75,feedback:"Almost perfect. Please take quiz again.", image: "above.jpg"},
	   {score:100,feedback:"Excellent! You're a JavaScript pro!", image: "excellent.jpg"}
	   ];

for(let element of grading){
	if(sum == element.score) {
    response = element.feedback + "<br /><img src='" + element.image + "' width='500'  />";
	  }


}
	  



document.getElementById("grade2").innerHTML = response; 

return false; // required to not refresh the page; just leave this here
} //this ends the submit