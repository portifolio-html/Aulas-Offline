var count = 1;


setInterval(function(){
    count++;
    if(count>5){
        count = 1;
    }
    var slide = document.getElementById("btn"+count)
    slide.checked=true
    
}, 5000)
