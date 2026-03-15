console.log("JavaScript connected successfully");
let slider=document.getElementById("slider");
let position=0;

setInterval(function(){

position-=2;

slider.style.transform="translateX("+position+"px)";

if(Math.abs(position) > 900){
position=0;
}

},30);

