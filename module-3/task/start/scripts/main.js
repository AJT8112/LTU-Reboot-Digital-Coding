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
console.log(arrProductData[0]);
console.log(arrProductData[4]);

let objProductData = {
    'productName':productName,
    'price':price,
    'quantity':quantity,
    'inStock':inStock,
    'discountAmount':discountAmount, 
};

console.log(objProductData);

console.log(objProductData.productName)
objProductData['productName'] = ["Egg Mayo Sandwhiches"];
console.log(objProductData.productName);

objProductData.alexSample1 = 'This is new Data 1';
objProductData["alexSample2"] = 'This is new Data';
console.log(objProductData);

function outputTimesTables(number){
    for(
        counter=1;
        counter<=12;
        counter++
    ){
        let sum = counter * number;
        let strMessage = counter + ' * ' + number + ' = ' + sum;
        console.log(strMessage);
    }
}
for(multiplier=1;multiplier<=12;multiplier++){
    outputTimesTables(multiplier);
}

console.log(shoppingCart);

let objCoupon1 = {
    types:['toiletries','condiment'],
    type:'flatFee',
    amount:0.5,
};

let objCoupon2 = {
    types:['canned','snacks'],
    type:'percentage',
    amount:30,
};

let objCoupon3 = {
    types:[''],
    type:'basketTotal',
    amount:25,
};

let objCoupon4 = {
    types:[''],
    type:'basketPercentage',
    amount:40,
};

function totalPriceOfShopping(shoppingCart,objCoupon=null){
    // LOOP through each item of the array 
    let totalPrice = 0;
    for(arrayKey=0; arrayKey < shoppingCart.length; arrayKey++){
        //Select each key sequentially
        let currentItem = shoppingCart[arrayKey];
        //get the total price of the current item multiplied by the quantity
        let currentItemPrice = currentItem.quantity * currentItem.price;
        //if there is a coupon apply a discount to current item.
        let discount = 0;
        //If objCoupon has been passed as an argument and the type is not one that affects the total price
        if(objCoupon && objCoupon.type != 'basketTotal' && objCoupon.type != 'basketPercentage'){
            //if the current item type can be found in the array for types of item to be discounted
            if(objCoupon.types.includes(currentItem.type)){
                //switch statement for type of coupon
                switch(objCoupon.type){
                    case 'flatFee':
                        //work out the total discount based on amount times quantity
                        discount = objCoupon.amount * currentItem.quantity;
                        //remove the discount amount from the current item price
                        currentItemPrice = currentItemPrice - discount;
                        break;
                    case 'percentage':
                        //work out the total percentage to be removed
                        discount = (currentItemPrice / 100) * objCoupon.amount;
                        //remove the discount amount from current item price
                        currentItemPrice = currentItemPrice - discount;
                        break;
                }
            }

        }
        
        totalPrice += currentItemPrice;
    }
    if(objCoupon && (objCoupon.type == 'basketTotal' || objCoupon.type == 'basketPercentage')){
        switch(objCoupon.type){
            case 'basketTotal':
                //work out the total discount based on amount times quantity
                totalPrice = totalPrice - objCoupon.amount;
                break;
            case 'basketPercentage':
                //work out the total percentage to be removed
                discount = (totalPrice / 100) * objCoupon.amount;
                totalPrice = totalPrice - discount;
                break;
        }
    }
    // Return total price
    return totalPrice.toFixed(2);
}

let shoppingCartPrice = totalPriceOfShopping(shoppingCart);
console.log(shoppingCartPrice);
shoppingCartPrice= totalPriceOfShopping(shoppingCart,objCoupon1);
console.log(shoppingCartPrice);
shoppingCartPrice= totalPriceOfShopping(shoppingCart,objCoupon2);
console.log(shoppingCartPrice);
shoppingCartPrice= totalPriceOfShopping(shoppingCart,objCoupon3);
console.log(shoppingCartPrice);
shoppingCartPrice= totalPriceOfShopping(shoppingCart,objCoupon4);