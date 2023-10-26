const days=document.getElementById("days")
const hours=document.getElementById("hour")
const minutes=document.getElementById("minutes")
const second=document.getElementById("second")

function time(){
    const currentyear=new Date().getFullYear();

const newyear=new Date(`jan 1 ${currentyear+1} 00:00:00`);
const currentdate=new Date();
const diff=newyear-currentdate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);

days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
second.innerHTML=s;
}
setInterval(time,1000);
