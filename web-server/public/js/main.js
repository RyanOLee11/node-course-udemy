console.log('this is loaded fromt the main js file');

fetch('http://localhost:3000/weather?address=!').then(response =>{
    response.json().then(data => {
        if(data.error){
            console.log(data.error);
        }
        else{
            console.log(data);
        }     
    })

})