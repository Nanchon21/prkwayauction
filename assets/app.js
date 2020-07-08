const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyAc8SRSTkpGKf7XkCOmObfmoFipzL0gyFs",
    authDomain: "parkway-bidding.firebaseapp.com",
    databaseURL: "https://parkway-bidding.firebaseio.com",
    projectId: "parkway-bidding",
    storageBucket: "parkway-bidding.appspot.com",
    messagingSenderId: "367527110546",
    appId: "1:367527110546:web:1c9600ffdc6ab0cd23434b",
    measurementId: "G-XGCLRB7KNC"
  };
  firebase.initializeApp(firebaseConfig);


db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

var win=false;
activeBidders=2;
rateModify=3;
function AddMinutesToDate(date, minutes) {
    return new Date(new Date().getTime() + minutes * 60000);
}
// Set the date we're counting down to
var countDownDate = AddMinutesToDate(countDownDate, 10);
// Update the count down every 1 second
x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
  
// Find the distance between now and the count down date
var distance = countDownDate - now;

//Use the remaining time (distance) to increment the number of bidders
if (distance %17==0){
    activeBidders+=1;
    updateBidders()
}
  
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
// Output the result in an element with id="demo"
document.getElementById("timefield").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
  
// If the count down is over, write some text 
if (distance < 0) {
  clearInterval(x);
  document.getElementById("timefield").innerHTML = "EXPIRED";
  document.getElementById("nowb").disabled = true;
  document.getElementById("buynow").disabled = true;
  function alert3pm() {
    if(myBid=curbid){
        alert("You have won this auction")
        win=true;
        console.log(win);
    }
  alert("The auction has expired!");
}
setTimeout(alert3pm, distance);
}}, 1000);

function updateBidders(){
    if (activeBidders>1){
    rate+=rateModify*activeBidders;
    }
}

document.getElementById("myBidDisp").style.visibility="hidden";
document.getElementById("bidderDisp").style.visibility="hidden";

document.getElementById("timefield2").style.visibility = "hidden";

var bnw=0;
var startPrice=20;
var rate=5;

document.getElementById("bnow").style.visibility = "hidden";
document.getElementById("stra").innerHTML = startPrice + " Tokens";

function buynow(){
    	document.getElementById("timefield").style.display = "none";
    	document.getElementById("timefield2").innerHTML = "00:00";
    	document.getElementById("timefield2").style.visibility = "visible";
    	document.getElementById("initial").style.display = "none";
    	document.getElementById("bnow").style.visibility = "visible";
    	if (bnw==0){
    		bnw=125;
    		document.getElementById("bnow").style.visibility = "hidden";
    	}
    	document.getElementById("chb").innerHTML = bnw + " Tokens";
    	document.getElementById("nowb").disabled = true;
      document.getElementById("buynow").disabled = true;
      win=true;
      console.log(win);
      alert("You have purchased the parking space for " + bnw +" tokens")
	}
   
   	var curbid=0;
   	var m=0;
    var myBid=0;
   
    function bidnow(){
        var bidinp=document.getElementById("bid").value;
        //DO NOT REMOVE THE BELOW
        bidinp++;
        curbid++;
        bidinp--;
        curbid--;
        //DO NOT REMOVE THE ABOVE
        lowest=curbid+rate;
 		if (bidinp>=lowest){
	        if (bidinp>curbid && bidinp>=startPrice){
	            curbid=bidinp;
	            bnw=curbid*2.5;
	            document.getElementById("initial").style.display = "none";
	    		document.getElementById("bnow").style.visibility = "visible";
	            document.getElementById("chb").innerHTML = bidinp + "Tokens";
	   			document.getElementById("bnow").innerHTML = bnw +"Tokens";
	        }else if (bidinp<=curbid){
	        	alert("Please place a bid higher than the current bid!");
	        }else if (bidinp<startPrice){
	        	alert("Please place a bid higher than the starting bid!")
	        }
	    }else{
	    	alert("Your bid must be atleast "+rate+" tokens greater than the current highest bid!")
	    }
      myBid=curbid;
      document.getElementById("myBidDisp").innerHTML=myBid +"Tokens";
      document.getElementById("dummySpan").style.display="none";
      document.getElementById("myBidDisp").style.visibility="visible";

    }
    
     document.getElementById("bidderDisp").innerHTML=activeBidders +"Bidders";
      document.getElementById("dummySpan2").style.display="none";
      document.getElementById("bidderDisp").style.visibility="visible";
	