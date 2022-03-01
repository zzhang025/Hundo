
// Get the values from the Pgae //
// Starts and controller functino
function getValues(){
    //Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //Validate Inputs
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers= generateNumbers(startValue,endValue)
    } else {
        alert("Inputs must be integers")
    }
    //We call generateNumber function
    let numbers = generateNumbers(startValue,endValue);

    //Call displayNumbers function
    displayNumbers(numbers);

}

// Generate numbers from the StartValue to EndValue
// Logic functions
function generateNumbers(sValue,eValue){

    let numbers=[];

    // get all numbers from Start to End
    for(let index= sValue; index <= eValue; index++){
        numbers.push(index);
    }

    return numbers;
}

// Display even numebrs bold
// Display function 
function displayNumbers(numbers){
    let templateRows ="";
    let className="even";
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        if(number % 2 == 0){
            className="even";
        } else{
            className="odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows
}