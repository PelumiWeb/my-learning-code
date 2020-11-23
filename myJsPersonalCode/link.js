
//const headerTest = document.getElementById('header')
//
//        
//    headerTest.innerHTML = '<em>Mango and banana</em>';
//  var letsDoThis = 'what are we doing?';
//var maths = [2, 3, 4, 5, 6]
//
//
//for (i = 0); 1 < 10; 1++; {
//     console.log(maths) 
//    
//}
//

///    
//    var header = document.getElementById('header');
//    function toggle()  {
//        
// if (header.classList == 'new_class') {
//     header.classList.remove('new_class')
// }
//        else {
//            header.classList.add('new_class')
//        }
//        
//////    
//        var countDown = document.getElementById('Countdown');
//        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//       var  i = 10;
//var date = new Date;
//var hours = date.getHours;
//var minutes = date.getMinutes;
//console.log(date)
//
//      function count() {
//          if (i === arr.length) {
//            
//            countDown.innerHTML = date
//      }
//   }
//        setInterval(count, 1000)
//     count();
//        
//        
//    
        
    
  
//
//function toggle() {
//    alert((parseInt(Math.random() * 10)))
//}

//var x = document.getElementById('btn');
//Bad code
//x.onclick = function () {
//    document.body.innerHTML = Date();
//}

//Good code 

//var x = document.getElementById('btn');
//
//x.addEventListener('click', function(){
//    
////    document.body.innerHTML = Date();
////})
////
////
//
//
//var x = document.getElementById('btn');
//x.addEventListener('click', myFunction)
//
//function myFunction () {
//   alert((parseInt(Math.random() * 10)));
//    x.removeEventListener('click', myFunction)
//}
//


// var images = [
//    'image_slider1.jpg',
//     'image_slider2.jpg',
//     'image_slider3.jpg'
// ];

const header = document.querySelector('.header')

const head = header.textContent
var headerText = head.split("")
header.textContent = ""
 console.log(headerText)
// for (var i = 0; i <= headerText.)

 for(let i = 0; i < headerText.length; i++) {
   header.innerHTML += "<span>" + headerText[i] + "</span>"

   console.log('still woking')
 }
 let char = 0
  let timer =  setInterval(ontick, 100)

  function ontick()  {
      const span = header.querySelectorAll("span")[char]
      span.classList.add('fade')
      char++
      if (char === headerText.length) {
          complete();
          return
      }
  }

  function complete () {
      clearInterval(timer)
      timer = null;
  }
 
var num = 0;

function next() {
  var slider =  document.getElementById("slider");
   num++;
   if (num >= images.length) {
       num = 0
   }
   slider.src = images[num];
}

setInterval(next, 5000)

function prev() {
var slider =  document.getElementById('slider'); 
    num--;
    if (num < 0) {
        num = images.length-1;
    }
     slider.src = images[num];
}
                

// function countdownSecs () {
//     const date = new Date()
//     const sec = date.getSeconds()
//     const min = date.getMinutes()
//     const hour = date.getHours()
//     const count =  document.getElementById('Countdown')
   
// count.textContent =  `${hour}: ${min}: ${sec}`
    
// }
// setInterval(countdownSecs, -1000)



//setInterval(countdownSecs, 1000)

var counts = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];
var num = 0
function countUp() {
   num++;
    if (num >= counts.length){
        num = 0
    }
    counts[num]
    console.log(counts)
}


//setInterval(countUp, 1000)


/////Function constructor..
//For example if a multiple object is needed, instead for us to create it this way...
//
//john {
//    name: 'john',
//    job: 'Player'
//    yearOfbirth: 1998;
//}
//
//john {
//    name: 'john',
//    job: 'Player'
//    yearOfbirth: 1998;
//}
//
//
//john {
//    name: 'john',
//    job: 'Player'
//    yearOfbirth: 1998;
//}
//
////instead of writing it this way, i.e repeating our code, we will create a function constructor..
///
// var Name = function(name, job, yearofBirth) {
//    this.name = name;
//    this.job = job;
//    this.yearofBirth = 1998;
//}
//
////and creat an empty object, this way, multiple empty objects, as much as possible..
//
//var john = new (john, player, 1998)



///Retaking the courses and challenges
//
//var johnMass, markMass, johnHeight, markHeight
//
//johnMass = 50;///
//johnHeight = 20;//
//markMass = 100;;
//markHeight = 50//
//
//var johnBmi, markBmi;
//
//johnBmi = johnMass / (johnHeight *
// johnMass);
//
//markBmi = markMass / (markHeight *
// markMass);
//
//var information = markBmi > johnBmi; 
//
//console.log('  is mark\'s BMI higher than john\'s? ' + information)
//
//
//
//if (markBmi > johnBmi) {
//    console.log('mark\'s BMI is higher than John\'s.')
//}else {
//     console.log('John\' BMI is higher than mark\'s.')
//} 
//
////////if / else statement
//
//
//var firstName = 'john';
//var civilStatus = 'single';
//
//if (civilStatus === 'married') {
//    
//    console.log(firstName + ' is married');
//} else {
//    console.log(firstName + ' will hopefully married soon:)')
//}
//
//var isMarried = true;
//
//if (isMarried) {
//    console.log(firstName + ' is married');
//} else {
//    console.log(firstName + ' will hopefully married soon:)')
//}
//
//
///// Boolean logic 
//
//var firstName = 'john';
//var age  = 16;
//
//if (age < 13) {
//    console.log(firstName + ' is a boy')
//    
//}else if ( age >= 13 && age < 20) {
//    console.log(firstName + ' is a teenager')
//} 
//
//else {
//     console.log(firstName + ' is a boy');
//}
//
/////////***********
////The Ternary Operator and Switch Statement
//
//var firstName = 'john';
//var age  = 16;
//
//age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice') 
//
//var drink = age >= 18 ? 'drink' : 'juice'
//
//console.log(drink);
//
////Trick to check how to check if a variable is defined.
//
//var height;
//if (height || height === 0) {
//    console.log('Variable is defimed');
//} else {
//    console.log('Variable has NOT been defined');
//}
//
////Coding challeneg 
//var johnAverage, mikeAverage,maryAverage;
//
//
//johnAverage = (89 + 120 + 103)/ 3;
//mikeAverage = (116 + 94 + 123)/ 3;
//maryAverage = (97 + 134 + 105)/ 3;
//console.log(johnAverage, mikeAverage, maryAverage)
//if (johnAverage > mikeAverage && johnAverage > maryAverage) {
//    console.log('John\'s team wins with the total of ' + johnAverage )
//} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
//    console.log('Mark\'s tean wins with the total of ' + mikeAverage)
//} else if (maryAverage > johnAverage 
//&& maryAverage > mikeAverage) {
//    console.log('Mary\'s team wins with the total of ' + maryAverage )
//}
//
///***************************************
// Function*/
//
//function calculateAge(birthYear) {
//    return 2020 - birthYear;
//} 
//
//var ageJohn = calculateAge(1990);
//var ageMike = calculateAge(1948);
//var ageJane = calculateAge(1969);
//
//console.log(ageJohn, ageJane, ageMike);
//
//
//function yearsUntilRetirement(year, firstName) {
//    var age = calculateAge(year);
//    var retirement = 65 - age;
//    if (retirement > 0) {
//          console.log(age)
//    console.log(firstName + ' retires in ' + retirement + ' years. ')
//    }else {
//        console.log(firstName + ' has already retired ' + retirement + ' years ')
//    }
//  
//}
//
//yearsUntilRetirement(1990, 'john');
//yearsUntilRetirement(1998, 'Pelumi')
//yearsUntilRetirement(2005, 'Toluwani')
//yearsUntilRetirement(2000, 'Boluwatife')
//yearsUntilRetirement(1940, 'Iya pupa')
//
//
// ////////////////
//// function statement and expression
//
////////function declaration
//// 
//// function whatDoYouDo (jod, firstName) {
////     
//// }
//
//
////////function expression
// var whatDoYouDo = function (job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver': 
//             return firstName + ' drives a cab in lisbon.';
//             
//         case 'designer': 
//             return firstName + ' designs beautiful website ';
//         default: 
//             return firstName + ' does something else.';
//     }
// }
// 
// console.log(whatDoYouDo('designer', 'Pelumi'))
//
//
////Push is used to add values at the end of an array
////unshift is used to add values at the begining of an array
////Pop is used to remove values at the end of an array, while
////shift is used to remove values at the beginng of an array.
//
//
//
//function tipCalculator(bills) {
//    var percentage;
//    if (bills < 50) {
//        percentage = 0.2 
//    }else if (bills <= 50 && bills < 200) {
//        percentage = 0.15 
//    } else  {
//        percentage = 0.1; 
//    } 
//    return percentage * bills;
//}
//
//console.log(tipCalculator(300));
//
//var bills = [124, 48, 268];
//var tips = [tipCalculator(bills[0]),
//            tipCalculator(bills[1]),
//            tipCalculator(bills[2])]
//
//var finalValues = [bills[0] + tips[0],
//                  bills[1] + tips[1],
//                  bills[2] + tips[2]]
//            
//console.log(tips, finalValues);
//
//johnMass = 50;///
//johnHeight = 20;//
//markMass = 100;;
//markHeight = 50//
//
//var Mark = {
//    fullName: 'mark',
//    mass: 100,
//    height: 50,
//    calcBmi: function() {
//     this.bmi = this.mass/ (this.height * this.height)
//        return this.bmi
//    } 
//      
//}
//
//var john = {
//    fullName: 'John',
//    mass: 50,
//    height: 20,
//     calcBmi: function() {
//      this.bmi = this.mass/ (this.height * this.height)
//         return this.bmi
//    }
//
//}
//
// john.calcBmi();
// Mark.calcBmi();
//console.log(john, Mark);
//
//if (john.bmi > Mark.bmi) {
//    console.log(john.fullName +  ' has the highest BMi with to total point of ' + john.bmi)
//} else if (Mark.bmi > john.bmi) {
//     console.log(Mark.fullName + ' has the highest BMi with to total point of ' + Mark.bmi)
//} else {
//    console.log('they draw...')
//}
//
/////Loops and iteration 
//var john = ['john', 'Smith', 1990, 'designer', false]
//
//for (var i = 0; i < john.length; i++) {
//    console.log(john[i])
//}
//
////for (var i = 0; i < john.length; i++) {
////    if (typeof john[i] !== 'string') continue;
////    console.log(john[i])
////}
////
////
////for (var i = 0; i < john.length; i++) {
////    if (typeof john[i] !== 'string') break;
////    console.log(john[i])
////}
//
////
////for (var i = john.length; i > 0; i--) {
////    console.log(john[i])
////}
//
//
////coding challenges
//
////function tipCalculator(bills) {
////    var percentage;
////    if (bills < 50) {
////        percentage = 0.2 
////    }else if (bills <= 50 && bills < 200) {
////        percentage = 0.15 
////    } else  {
////        percentage = 0.1; 
////    } 
////    return percentage * bills;
////}
////
////var bills = [124, 48, 268];
////var tips = [tipCalculator(bills[0]),
////            tipCalculator(bills[1]),
////            tipCalculator(bills[2])]
////
////var finalValues = [bills[0] + tips[0],
////                  bills[1] + tips[1],
////                  bills[2] + tips[2]]
////            
////console.log(tips, finalValues);
//
//var john = {
//    bills: [124, 48, 268, 180, 42],
//    calcTip: function() {
//        this.tips = []
//        this.finalValues = []
//       
//     for (var i = 0; i < this.bills.length; i++) {
//         var percentage;
//          var bills = this.bills[i]
//    if (bills < 50) {
//        percentage = 0.2 
//    }else if (bills <= 50 && bills < 200) {
//        percentage = 0.15 
//    } else  {
//        percentage = 0.1; 
//    } 
//     ///////// Add results to the corresponding arrays
//       this.tips[i] = bills * percentage;
//        this.finalValues[i] = bills + bills * percentage;
//         //explaining this to myself, this.tips[i]
//        //simply means the tips looping according to the bills.length which is equal to five 
//        //so it is like saying this.tips is equal to bills * percentage.
//        //but instead of saying this.tips[0] or [4], we just loop around it and 
//  }        
//}
//    
//}
////function calcAverage(tips) {
////    var sum = 0;
////    for (var i = 0; i < tips.length; 1++) {
////        sum = sum + tips[i];
////    }
////    return sum / tips.length;
////}
//
//// Do the clacul
//
//john.calcTip();
//console.log(john)
//
//function presQuestion (name) {
//    return function(level) {
//        if (name === 'Cronaldo') {
//            console.log ('you are just one random person that doesn\' understand football, that is you are a ' + level);   
//        } else if (name === 'Messi') {
//            console.log(' you are one of those people that understands what they call football therefore you are a ' + level)
//        } else {
//            console.log('you no nothing about football')
//        }
//    }
//}
//
//
//
//presQuestion('Cronaldo')('beginner')
//presQuestion('Messi')('legend')
//
//////////challenge No 7 
//
//
//var Question = function(question, answers, correctAnswers )  {
//    this.question = question,
//    this.answers = answers
//}
//


document.addEventListener('keypress', event)

// function event (event){

//     var html = ' <li class="list"><div>Shokem</div><p>Indomie</p><span>#1000</span><a href="#" class="btn">X</a></li>'
// if (event.keyCode === 13) {
//         document.querySelector('.unordered_list').insertAdjacentHTML('beforeend', html)
//   console.log ('Enter was pressed')    
// }
// }

// var deleteItem = () => {
//     html.parentNode.removeChild(html) 
// }
// document.getElementById('btn').addEventListener('click', deleteItem)

// //ES6 classes

// class Person {
//     constructor(name, yearOfBirth, occupation) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.occupation = occupation
//     }
//     static calcAge() {
//         let date = new Date().getFullYear
//         let age = date - this.yearOfBirth
//         console.log(age)
//     }

// }

// const pelumi = new Person('Oluwapelumi',1998, 'student')
// console.log(pelumi)
// Person.calcAge()

// // How to convert an objects to an array
// //example 
// const person = {
//     name:'pelumi',
//     age: 21,
//     occupation: 'student'
// }
// // To get the object keys
// const keys = Object.keys(person)
// //Output = [name, age, occupation]

// //To get the values
// const values = Object.values(person)
// //Output = ['pelumi', 21, 'student']

// //To get both the values and the keys
// const entries = Object.entries(person)
// //Output = ['name', 'pelumi'], ['age', 21], ['occupation', 'student']

// // To convert it back from an object to an array? That's simple!
// const fromEnteries = Object.fromEntries(entries)

// console.log(keys,values,entries,fromEnteries )

// //Destructuring
// //array destructuring 
// let arr =  [a, b] = [12, 25]
// console.log(arr)

// let [c, d, ...rest] = [12, 25,5 , 7, 8, 9,10]
// console.log(rest)
// rest.forEach(e =>{
//     if (e > 5) {
//         console.log('It is correct')
//     }
// })

// // let [x, y ,z ] = 

// // Destructuring Objects

// const user = {
//     id: 42,
//     is_verified: true, 
//     mode: 35,
//     age:21
// }
// const {id, is_verified, ...spread} = user
// console.log(id,is_verified,spread, user)
///
//Create a countdown
// 1. set the time you are counting down to
//2. set the time between those time
//3 convert the time to usabe data
//4 output the clock data as a reusable data 
//5. display the clock on the page, and stop the clock when it reaches zero

var deadline  = new Date("july 31, 2020 00:01:00").getTime()
var displayCountDown  = function() {
var now = new Date()
var countDown = deadline - now

var days  = Math.floor(countDown / (1000 * 60 * 60 * 24))
var hours = Math.floor((countDown %(1000 * 60 * 60 * 24))/ (1000 * 60 * 60))
var min = Math.floor((countDown % (1000 * 60 * 60))/ (1000 * 60))
var sec = Math.floor((countDown % (1000 * 60)) / 1000);
const coundown = document.getElementById('Countdown').textContent =` ${days}: ${hours}: ${min}: ${sec}`
}

 setInterval(displayCountDown, 1000)
// function displayTime () {
// var now = new Date()
// var hour = now.getHours()
// var min = now.getMinutes()
// var sec =  now.getSeconds()
// console.log(hour, min,sec)

// }
// setInterval((displayTime) => {
// var now = new Date()
// var hour = now.getHours()
// var min = now.getMinutes()
// var sec =  now.getSeconds()
// console.log(hour, min,sec)

// }, 1000);
// //setInterval(displayTime, 1000)







































































































