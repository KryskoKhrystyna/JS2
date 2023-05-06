//1
let hamburgers = 4;
let fries = 4;
function menu(hamburgers, fries) {
    if (hamburgers >= 4 && fries >= 1) {
      console.log('Ми поїли');
    } else {
      console.log('Ми йдемо в інше кафе');
    }
  }

  menu(hamburgers, fries);

  //2
let num1 = 1000;
function checkNumber (num1){
    if(num1 >= 1000 && num1 <= 1900 ){
console.log('ok')
} else {
console.log('cannot be bought')
}
}
checkNumber (num1);

//3
let num2 = 1000;
function checkNumb (num2){
    if(num2 < 1000 || num2 > 1900 ){
        console.log('cannot be bought')
    } else {
        console.log('you can buy')
    }
}
checkNumb (num2);

//3.1
let num3 = 1901;
function checkNum2 (num3){
    if(num3 < 1000 || !(num3 <= 1900) ){
        console.log('cannot be bought')
    } else {
        console.log('you can buy')
    }
}
checkNum2 (num3);

//4
let season = 0;
function checkSeason (season){
    if (season == 0) {
        console.log("Winter");
      } else if (season == 1) {
        console.log("Spring");
      } else if (season == 2) {
        console.log("Summer");
      } else if (season == 3) {
        console.log("Autumn");
      } else {
        console.log("There is no season");
      }
}
checkSeason (season);

//5
let a = 8;
let b = 14;
let c = 9;
function checkSomeNumb (a, b, c){
    if( a < c && a > b || a > c && a < b ){
        console.log('a')
    } else if (b < a && b > c || b > a && b < c){
        console.log('b')
    } else {
        console.log('c')
    }
}
checkSomeNumb (a, b, c);
//6
function DayOfWeek(week) {
    switch(week){
        case 0: 
            return 'Monday';
        case 1: 
            return 'Tuesday';
        case 2: 
            return 'Wednesday';
        case 3: 
            return 'Thursday';
        case 4: 
            return 'Friday';
        case 5: 
            return 'Saturday';
        case 6: 
            return 'Sunday';
        default:
            return 'There is no such day of the week';
    }
}

console.log(DayOfWeek(6));

//8 
function checkDifferenceResult (value, value2, result){
    switch(result){
        case '+': 
            console.log(value + value2);
            break;
        case '-': 
            console.log(value - value2);
            break;
        case '/': 
            console.log(value/value2);
            break;
        case '*': 
            console.log(value*value2);
            break;      
        default:
            console.log('mistake');
            break;  
    }
}
checkDifferenceResult (4, 2, "+");

//9
let meters = 3;
let kilometers = meters/1000;
function checkKilometers (kilometers){
    if( kilometers == 1){
        console.log( kilometers + ' кілометр ')
    } else if( kilometers == 2 || 3 || 4 ){
        console.log( kilometers + ' кілометра ')
    } else {
        console.log( kilometers + ' кілометрів ')
    }
}
checkKilometers (kilometers);
