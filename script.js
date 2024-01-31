var todoItems = [];

loadELemrnts();

function loadELemrnts() {
    var arrayItemsDiv = document.getElementById("arrayItems");
    arrayItemsDiv.innerHTML = "";
    if (todoItems.length > 0) {
        for (var i = 0; i < todoItems.length; i++) {
            // Create a new paragraph element
            var paragraph = document.createElement("p");

            // Set the text content of the paragraph to the current array item
            paragraph.textContent = todoItems[i];

            // Append the paragraph element to the container div
            arrayItemsDiv.appendChild(paragraph);
        }
    }
}



function addTodo() {
    var todo = document.getElementById("todo").value;
    todoItems.push(todo);
    console.log(todoItems);
    loadELemrnts();
}


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
    var fullname = getFullname(firstName, lastName);

}


function getFullname(firstName, lastName) {

    var characters = firstName.split(",");
    var fullname = characters[0] + "." + lastName;
    console.log(characters[0] + "." + lastName);
    return fullname;
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

function findLongestPalindrome(string) {
    let longest = '';

    for (let i = 0; i < string.length; i++) {
        // check for even length palindrome
        let length1 = expandAroundCenter(string, i, i);
        // check for odd length palindrome
        let length2 = expandAroundCenter(string, i, i + 1);

        let length = Math.max(length1, length2);
        if (length > longest.length) {
            longest = string.substring(i - Math.floor(length / 2), i + Math.ceil(length / 2) + 1);
        }
    }

    return longest;
}

function expandAroundCenter(string, left, right) {
    while (left >= 0 && right < string.length && string[left] === string[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}


function discoverWhile() {

    let count = 0;

    while (count < 5) {
        console.log("Count: " + count);
        count++;
    }


}

function discoverDoWhile(){
    let count = 0;

do {
  console.log("Count: " + count);
  count++;
} while (count < 5);

}


function isPalindrome() {
    // Remove non-alphanumeric characters and convert to lowercase

    str = "ABABA"; 
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   A!==A 
//   B!==B
//   B!==B
var isTrue = false;

    // Use a loop to compare characters from the beginning and end
    console.log(Math.floor(cleanedStr.length / 2));
    for (let i = 0; i <Math.floor(cleanedStr.length / 2) ; i++) {
      if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
        isTrue= false; // Characters do not match, not a palindrome
      }
    }
    
    isTrue= true;
    console.log(isTrue);
    return isTrue;// All characters match, it's a palindrome
  }
  


  
