const form = document.querySelector('form') 

// this usecase 'height' will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/ 10000)).toFixed(2);
        //show the result
        results.innerHTML = `${bmi}`
        if(bmi <= 18.6){
            results.innerHTML = `Congrats you are in Under Weight, bmi is ${bmi}`
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            results.innerHTML = `Congrats you are in Normal Range, bmi is ${bmi}`
        }
        else {
            results.innerHTML = `Congrats you are in Over Weight, bmi is ${bmi}`
        }
    }
})