const back=document.querySelector("#back");
const next=document.querySelector("#next");
const photos=['School2.png','Game.png','GlamurLUX.png','lets splitbill.png','relaxation.png','forecast.png'];
let i=0;
next.addEventListener('click', ()=>{
    i++;
    if (i>photos.length-1)
    {i=0;};
    document.querySelector('#pictures').src=photos[i];
    document.querySelector(".captions").innerHTML=descriptions[i];

});
back.addEventListener('click',()=>{
    i--;
    if(i<0){
        i=photos.length-1;
    }
    document.querySelector('#pictures').src=photos[i];
    document.querySelector(".captions").innerHTML=descriptions[i];
});

