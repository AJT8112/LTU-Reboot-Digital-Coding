console.log('Hello');

// single line comment

/* 
multiline comment 
*/

let productName = 'alex';
let price = '10.00';
let quantity = 3;
let inStock = true;
let discountAmount = 3;

console.log(productName);
console.log(price);
console.log(quantity);
console.log(inStock);
console.log(discountAmount);

function showProductName(){
    console.log(productName);
}

showProductName();

function totalPrice(productPrice=0,productQuantity=0){
    productPrice = parseFloat(productPrice);
    productQuantity = parseFloat(productQuantity);
    let totalProductPrice = productPrice * productQuantity;
    console.log(totalProductPrice);
}

totalPrice(price,quantity);

function squareNumber(number=0){
    let sum = number * number;
    return sum;
}

var square = number => number * number;

let squaredNumber = squareNumber(3);
console.log(squaredNumber);

let squared = square(3);
console.log(squared);

function productDiscount(){
    let sum;
    if(quantity > 1){
        sum = price * quantity;
        let discount = discountAmount * quantity;
        sum = sum - discount;
    } else {
        sum = price * quantity;
    }
    console.log(sum);
}
productDiscount();

//FUNCTION called drinkOrder has 2 perameters Drink and Size
function drinkOrder(size,drink){
    //VALIDATE the variables passed through.
    if(size != 'small' && size != 'medium' && size != 'large'){
        console.log('You have ordered a drink we don\'t sell');
        return;
    }
    let message = 'You have ordered a ' + size;
    //SWITCH drink
    switch(drink){
        //CREATE a case for each drink
        case 'cola':
            message +=  ' Coca-Cola';
            break;
        case 'lemon':
            message +=  ' Schwepps';
            break;
        case 'orange':
            message +=  ' Tango';
            break;
        default: 
            message = 'You have ordered a drink we don\'t sell'
            break;
    }
   console.log(message);
}
drinkOrder('large','cola');
drinkOrder('humungous','milkshake')

function calculator(num1, num2, operator){
    if(isNaNValidation(num1)){
        console.log('Number 1 is not a number')
        return;
    }
    if(isNaNValidation(num2)){
        console.log('Number 2 is not a number')
        return;
    }
    let sum;
    switch(operator){
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '/':
            sum = num1 / num2;
            break;    
        case '*':
            sum = num1 * num2;
            break;  
        case '%':
            sum = num1 % num2;
            break;
        default:
            console.log('Operator is not recognised');
            return;
    }
    return sum;
}

function isNaNValidation(number){
    return isNaN(number);
}

let sum1 = calculator(10,2,'+');
let sum2 = calculator(10,2,'-');
let sum3 = calculator(10,2,'/');
let sum4 = calculator(10,2,'*');
let sum5 = calculator(10,2,'%');
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);

let arrProductData = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount, 
];

console.log(arrProductData);
