var count = 1;
document.getElementById("button1").checked = true;

setInterval(function NextHobbie(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("button"+count).checked = true;
}, 2000)

