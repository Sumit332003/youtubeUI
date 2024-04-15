var ab  = document.querySelector(".fatherSlidebar");

var a  = document.querySelector("#click");
var b = document.querySelector(".sidebar");
var c = document.querySelector(".defaultMenu");


function abc(){
var i=0;
a.addEventListener("click", function(){
 if(i==0){
   
         c.style.display = "none";
        b.style.display = "block";
           ab.style.width="18vw";
           //alert("on");
           i=1; 
    }

else if(i==1){
         c.style.display = "block";
        b.style.display = "none";
        ab.style.width="5vw";
        //alert("off");
           i=0; 
    }
})
}
abc();