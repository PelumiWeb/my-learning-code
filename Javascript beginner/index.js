let name= 'Pelumi'
console.log(name);
//rules for naming variables

//1.they cannot be a reserved key-word.
//2. They should be meaningful.
//3. They cannot start with a number.
//4. They cannot contain a space or hyphen.
//5. They are case sensitive.

/*let firstName ='Pelumi';
 lastName = 'Ogundipe'
console.log(lastName)

let interestRate= 0.3;
interestRate= 1;

//Primitve type.

/*let name= 'Pelumi' //string literal
let age= '30' //Number literal
let disApprove= true //Boolean literal
let firstName= undefined //Undefined literal
let lastName= null // null literal*/


//reference type
  //objects
/*let name = 'Pelumi';
let age = '21';*/

/*let person = {
    name: 'Pelumi', age: 30
}         

//dot notation
person.name = 'Hassan';

//bracket notation
person['name'] = 'Mary';

console.log(person.name);*/

/*let selectedColors = ['red' , 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);
//function
//performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

//calculating function & returns function.
function square(number) {
    return  number * number;
} 
 let number = square(2);
 console.log(number);

 //youtube video 2.
 //duration = 3hrs
//coments
 /*var number = 5; //inline comment

 //Data types:
 //undefined, null, boolean, symbol, number, and object


 var myName = 'Beau';

 myName = B,

 let ourName = 'freecodecamp';

 const pi = 3.14;   
 

//initializing these uninitialize variabless
var a = 5;
var b = 10;
var c = 'I m am a'; 

//
a = a + 1;
b = b + 5;\
c = c + i am a String.*/

/*var sum = 10 + 10;
console.log(sum)

var difference = 10 - 5;
console.log(difference)

var product = 8 * 5;
console.log(product)

var quotient = 66/10;
console.log(quotient)

//incrementing number

var myVar  = 87;

myVar++;
console.log(myVar)

//Decrementing number
myVar--;
console.log(myVar);

var product = 2.0 * 2.5;
console.log (product)

var quotient = 10.0 / 2.5;
console.log(quotient);

//

var remainder;
remainder = 11 % 3;
console.log(remainder)

//

var a = 3;
var b = 17;
var c = 12;

a = a + 12;
b = 9 + b;
c = c + 7;
  
var ourStr = 'I come first.' + 'I come second';

console.log(ourStr);

var ourStr = 'this is first senence. '
ourStr += 'This is the second'

console.log(ourStr);

/////
var myName = 'Oluwapelumi ' ;
var greeting = 'Hello my name is ';
var greetings = 'how are you? ';

var place = greeting + myName  +  greetings;
console.log(place);

///
var someAdjective = 'worthwhile ';
var myStr = 'Learning Javascript is '

myStr +=someAdjective;
console.log(myStr);

///length
var firstLetterOfLastName = '';
var lastName = 'Lovelace'

firstLetterOfLastName = lastName[0]
console.log(firstLetterOfLastName.length);
//changing variables
var myStr = 'jello world'

myStr = 'Hello World'

console.log(myStr)

function wordBlanks(myNouns, myAjectives, myVerb, myAdverb) {
    var result = '';
    result += ' The ' + myAjectives + '' +  myNouns  + '' + myAdverb + ' ' + 'to the store '
 return result;

}

console.log(wordBlanks('dogs', 'big', 'run', 'quickly'));
//Arrays always end and begins with a bracket.
 
 var myArray = ['pelu', 6];
 console.log(myArray);

 var ourArray = [['Balls', 23], ['white sox', 55]];
 console.log(ourArray);

 var ourStr = [50, 60, 70];
 var myData = ourStr[0]
 console.log(myData)

 var ourArray = [30, 40, 50]
 ourArray[1] = 50;
 console.log(ourArray);

 var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]];
 var myData = myArray[3][1];
 console.log(myData)
 
 var ourArray = ['Stimpson', 'J' , 'Cat'];
 ourArray.push(['happy', 'Joy']);
 console.log(ourArray)
 /////removing item from an array.
 var ourArray = [1, 2, 3];
 var removedFromOurArray = ourArray.pop();
 console.log(ourArray)

 //adding the elements at the begining of the arrays with the word #unshift().
 //removing the elements at the beggining of the arrays with the word shift().

 //nesting arrays
 var myList = [['cereal, 3'], ['milk', 2] ['banana', 3] ['Juice', 2] ['eggs', 12]];

/* //learning resubale code
 function ourReusableFuction() {
     console.log('Heyyo, World');
 }
 ourReusableFuction();

 ///////

 function reusableFunction() {
     console.log('Hi World');
 }

 reusableFunction()*/
///////

/*function functionWithArgs(a, b) {
    console.log(a + b);
}  
functionWithArgs(10, 5);
//local variables taking upper hand over global variables

var outerWear = 'T-shirt';

function myOutfit() {

    var outerWear = 'Sweater'
    return outerWear
}

console.log(myOutfit());
console.log(outerWear);

//Boolean
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return 'Yes, that was true';
    }

    return 'No, that was false';

}
console.log(trueOrFalse(true));
//Equality Operator
function testEqual(val) {
    if (val==12) {
        return 'Equal'
    }
    return 'Not Equal'
}
console.log(testEqual(12));

function compareEquality(a, b) {
    if (a === b) {
        return 'Equal'
    }
    return 'Not Equal'
}
console.log(compareEquality(10, '10'))

//NotEqual

function notEqual(val) {
    if (val != 99) {
        return 'Not Equal'
    }
    return 'Equal'
}

console.log(notEqual(99));

//Greater than.

function testGreaterThan(val) {
    if (val > 20) {
        return 'Greater than'
    }
    return 'Not Greater Than'
}

console.log(testGreaterThan(21))

function testLowerThan(val) {
    if (val < 20) {
        return 'less than'
    }
    return 'Not less than'
}

console.log(testLowerThan(19))

function testLessThanOrEqual(val) {
    if (val <= 12) {

    return 'Small than or Equal to 12'
    }

if (val <= 24) {
return 'Small than or Equal to 24'

}

return 'more than 24'
}

console.log(testLessThanOrEqual(10))

function testIfBothAreEqual(val){
    if (val <=25 && val >= 10) {
        return 'Yes'
    }
    return 'No'
}

console.log(testIfBothAreEqual(12))

function testOutsiderOrInside(val) {
    if (val < 10 || val > 20) {
        return 'Outside'
    }
    return 'Inside'
}

console.log(testOutsiderOrInside(25))

///The use of Else..
//Else is mostly use to counter the if statement when not true.

function testElse(val) {
    if (val > 5) {
        return 'Bigger than 5'
    } else {
        return '5 or Smaller'
    }
}

console.log(testElse(4));*/


/*function orderMyLogic(val) {
    if (val < 5) {
        return 'Less than 5'
    } else if (val < 10) {
        return 'Smaller than 10'
    } else {
    return 'return beetweem 5 and 10'
    }

}


console.log(orderMyLogic(3));

function testSize(num) {
    if (num < 5) {
        return 'Tiny'
    } else if (num < 10) {
        return 'Small'
    }else if (num < 15) {
        return 'Medium'
    }else if (num < 20) {
        return 'Large'
    }else {
        return 'Huge'
    }
}

console.log(testSize(21))

//using case and switch

function caseInSwitch(val){
    var answer = '';
    switch(val) {
        case 1:
            answer = 'alpha';
            break;
        case 2: 
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
                break;
        case 4:
            answer = 'delta'
                 break;
        default: 
            answer = 'Stuff'
            break
    }
     return answer;       
    }


console.log(caseInSwitch(4))

//multiple cases 
function multipleCases(val) {
    var answer = '';
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = 'you';
        break;
        case 4:
        case 5:
        case 6:
            answer = 'Are';
        break;
        case 7:
        case 8:
        case 9:
            answer = 'Doing well'
        break;
    }
    return answer
}

console.log(multipleCases(9))*/

function chainToSwitch(val) {
    var answer = '';
    switch(val) {
        case 'bob':
            answer = 'Marley'
            break;
        case 42:
            answer = 'The answer'
        break;
        case 1:
            answer = 'There is no #1'
            break
        case 99:
            answer = 'miss me by this much'
            break;
        case 7:
            answer = 'ate nine'
            break;
    }
    return answer;
}

console.log(chainToSwitch('bob'))

function isLessThan(a, b) {
    return a < b;
   
}

console.log(isLessThan(20, 15))

//objects in Javascript.
var myDog = {
    'a name': 'Jack',
    'Legs': 3,
    'tails': 2,
    'friends': []

}
    delete myDog.bark;


console.log(myDog);

var myObj = {
    gift: 'pony';
    pell: 'kitten';
    bed: 'aleigh';
}


var myStorage {
    'car': {
        'inside': {
            'glove box': 'maps'
            'passenger seat': 'crumbs'
        },
        'outside': {
            'trunks': 'Jack'
        }
            
        }
    };

    var gloveBoxContents = myStorage.car.inside[glove box]

    console.log(gloveBoxContents)
