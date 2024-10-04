const cursor=document.querySelector(".cursor");
var timeout;


//this is for the mouse cursor animation
document.addEventListener("mousemove",(e)=>{
    let x =e.pageX;
    let y=e.pageY;
    cursor.style.top=y+"px";
    cursor.style.left=x+"px";
    cursor.style.display='block';


 //this is for stoping the animation
 function mouseStopped (){
    cursor.style.display= 'none';

}


/// this line of code is for hidding the cursor



});

///the last part of stopping the animation
document.addEventListener("mouseout",()=>{
    cursor.style.display="none";
});