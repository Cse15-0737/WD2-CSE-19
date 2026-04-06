let heading=document.getElementById("mainheading");
let paragraph=document.getElementById("paragraph");
let input=document.getElementById("userInput");
let font=16;

//Font Size Increase.
document.getElementById("fontsizebtn").addEventListener("click", function(){
    font+=2;
    paragraph.style.fontSize=font+"px";
});

//Show/Hide Paragraph.
document.getElementById("showbtn").addEventListener("click", function(){
    if(paragraph.style.display==="none"){
        paragraph.style.display="block";
    }
    else{
        paragraph.style.display="none";
    }   
});