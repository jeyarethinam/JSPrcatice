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
}

function discoverObject() {

    var studentObject = {
        "Name": "Jhon",
        "Age": 25,
        "Course": "IT",
        "Address": "Pesalai",
        "IsGraduated": true
    };
    var name = "jhon ";
    // console.log(studentObject.Name);
    // console.log(studentObject);

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

    // console.log(numberArray[3]);
    // console.log(stringArray[3]);

    for (let index = 0; index < arrayObject.length; index++) {

        // console.log(stringArray[index]);
        // console.log("Hello wolrd " + index);
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
    var lastName =  document.getElementById("lastName").value;
    getFullname(firstName,lastName);

}


function getFullname(firstName, lastName) {

    var characters = firstName.split("");
    //console.log(characters)
    console.log(characters[0] + "." + lastName);
}