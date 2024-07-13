const clock = document.querySelector('#digiclock');



setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    
},1000)


