const form = document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('height').value);

form.addEventListener('submit',function(ev){
    ev.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height < 0 || height === '' || isNaN(height)) {
        results.innerHTML = `! Please give a valid Height in Centimeters ${height}.` ;   
    }else if (weight < 0 || weight === '' || isNaN(weight)) {
        results.innerHTML = `! Please give a valid weight in KiloGrams ${weight}.` ;   
    }else {
       const bmi =  (weight/((height*height)/10000)).toFixed(2)
       //show the result
       if(bmi < 18.5){
        results.innerHTML = `<span>your are underweight and value is ${bmi}</span>`;
       }

       else if(bmi >=18.5 && bmi <= 24.9){
        results.innerHTML = `<span>your bmi value ${bmi}, Normal or Healthy</span>`
       }
       else if (bmi >= 25.0 && bmi <= 29.9){
        results.innerHTML = `<span>your are Overweight and value is ${bmi}</span>`;
       }else if (bmi >= 30){
        results.innerHTML = `<span>your are Obese and value is ${bmi}</span>`;
       }

    }

    
});