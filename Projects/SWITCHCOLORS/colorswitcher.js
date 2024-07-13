
const colorButtons = document.querySelectorAll('.button');
const body = document.querySelector('body');


colorButtons.forEach((button) =>{
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target)
        // if(event.target.id === 'red'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'yellow'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'blue'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'white'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'orange'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'green'){
        //     body.style.backgroundColor = event.target.id
        // }
        
        //switch
        switch (event.target.id) {
            case 'red':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'white':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'orange':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'green':
                body.style.backgroundColor = event.target.id;               
                break;

            default:
                break;
        }
    })
})

