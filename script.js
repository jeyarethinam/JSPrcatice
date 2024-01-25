function myFunction() {

    var numberOne = document.getElementById("numberOne").value;
    var numberTwo = document.getElementById("numberTwo").value;
    var calculationType = document.getElementById("calculationType").value;
    var outputLable = document.getElementById("lblOutput");
    var output;

    if (calculationType === "+") {
        output = parseInt(numberOne) + parseInt(numberTwo);
    } else if (calculationType == "-") {
        output = parseInt(numberOne) - parseInt(numberTwo);
    } else if (calculationType == "*" || calculationType == "x" || calculationType == "X") {
        output = parseInt(numberOne) * parseInt(numberTwo);
    } else if (calculationType == "/") {
        output = parseInt(numberOne) / parseInt(numberTwo);
    } else {
        output = "Invalid Calculation method";
    }
    outputLable.innerText = output;
    console.log(outputLable);
};

function discoverObject() {

    var studentObject = {
        "Name": "Jhon",
        "Age": 25,
        "Course": "IT",
        "Address": "Pesalai",
        "IsGraduated": true
    };
    var name = "jhon ";
    console.log(studentObject.Name, studentObject.Age);
    console.log(studentObject);

    var numberArray = [1, 2, 3, 4, 56, 76, 898, 4, 5, 66, 76, 5, 6, 7];

    var stringArray = ["a", "b", "c", "d", "e", "f"];
    var arrayObject = [
        {
            "Name": "Jhon",
            "Age": 25,
            "Course": "IT",
            "Address": "Pesalai",
            "IsGraduated": true
        },
        {
            "Name": "Snow",
            "Age": 25,
            "Course": "IT",
            "Address": "Pesalai",
            "IsGraduated": true
        },
        {
            "Name": "Tyruion",
            "Age": 25,
            "Course": "IT",
            "Address": "Pesalai",
            "IsGraduated": true
        },
        {
            "Name": "Lanister",
            "Age": 25,
            "Course": "IT",
            "Address": "Pesalai",
            "IsGraduated": true
        }
    ];


    console.log(numberArray[3]);
    console.log(stringArray[3]);
    console.log(arrayObject[2]);

    for (let index = 0; index < arrayObject.length; index++) {

        console.log(arrayObject[index].Name)

    }

};


function findMax() {
    var numberArray = [1, 2, 3, 4, 56, 76, 898, 4, 5, 66, 76, 5, 6, 7];
    var max = numberArray[0];

    for (let index = 1; index < numberArray.length; index++) {

        if (max < numberArray[index]) {
            max = numberArray[index];
        }
    }
    console.log("Maximum number is- " + max);

}

function findMiN() {
    var numberArray = [1, 2, 3, 4, 56, 76, 898, -1, 4, 5, 66, 76, 5, 6, 7];
    var min = numberArray[0];
    for (let index = 1; index < numberArray.length; index++) {
        if (min > numberArray[index]) {
            min = numberArray[index];
        }

    }

    console.log("Min number is- " + min);
}




function discoverParameter() {

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastName").value;
    getFullname(firstName, lastName);

}


function getFullname(firstName, lastName) {

    var characters = firstName.split(",");

    console.log(characters[0] + "." + lastName);
}


function discoverConditional() {

    var color = document.getElementById("color").value;


    if (color == "red") {

        console.log("Given color is Red ");

    } else if (color == "green") {
        console.log("Given color is green ");
    } else if (color == "blue") {
        console.log("Given color is blue ");
    }
    else {
        console.log("givven color is some thing else");
    }


}


function discoveerLoops() {
    var numberArray = [1, 2, 3, 4, 56, 76, 898, -1, 4, 5, 66, 76, 5, 6, 7];

    // console.log(numberArray[6]);
    for (let index = 0; index < numberArray.length; index++) {
        console.log("Hello " + numberArray[index]);

    }

}



function FizzBuzz() {
    var response = findDuplicates();

    for (let index = 1; index <= 100; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            console.log("Fizz Buzz" + index)
        } else if (index % 3 == 0) {
            console.log("Buzz" + index)
        } else if (index % 5 == 0) {
            console.log("Fizz " + index)
        }

    }
}


function findMonth() {


    var months = [8, 4, 5, 3, 2, 1];
    let monthNumber = 8;
    for (let index = 0; index < months.length; index++) {
        switch (months[index]) {
            case 1:
                console.log("January");
                break;
            case 2:
                console.log("February");
                break;
            case 3:
                console.log("March");
                break;
            case 4:
                console.log("April");
                break;
            case 5:
                console.log("May");
                break;
            case 6:
                console.log("June");
                break;
            case 7:
                console.log("July");
                break;
            case 8:
                console.log("August");
                break;
            case 9:
                console.log("September");
                break;
            case 10:
                console.log("October");
                break;
            case 11:
                console.log("November");
                break;
            case 12:
                console.log("December");
                break;
            default:
                console.log("Invalid month number");
        }

    }



}



function findDuplicates() {

    array = [2, 5, 7, 1, 3, 5, 2, 6];
    let countMap = { 2: 2 };
    let duplicates = {};

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        countMap[element] = (countMap[element] || 0) + 1;


        console.log(countMap[element]);

        if (countMap[element] > 1) {
            duplicates[element] = countMap[element];
        }
    }
    console.log(duplicates);
    return duplicates;
}








