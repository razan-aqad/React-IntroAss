// Task 4
// Define an interface to represent the structure of a product object
interface products {
    name: string; // Name of the product
    price: number; // Price of the product
}

// Function to calculate the total price of all products in an array
function productArrTS(arr : products[]){
    let total = 0 ;
    
    // Iterate over each product in the array and add its price to the total
    arr.forEach((product) => {
        total += product.price;
    })
    // Return the total price
    return total ;
}
// Array of products with name and price properties
const productsTS = [
    {name : "shampoo" , price : 20} ,
    {name : "chocolate" , price : 12} ,
    {name : "hat" , price : 24} ,
    {name : "shoes" , price : 70} 
];

// Print the total price of all products in the array
console.log("The total price for all products = " , productArr(products))

// the result was tested in TypeScript Playground and it equals 126

/////////////////////////////////////////////////////

// Task 5

// Function to validate the format of an email address
function correctEmailTS(email : string): boolean{
    // Regular expression to match a valid email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    // Test if the input email matches the regex pattern
    return regex.test(email);
}

// Test the function with valid and invalid email addresses
console.log(correctEmail("razan@example.com"));
console.log(correctEmail("razanibraheem"));
console.log(correctEmail("rola@gmail.com"));

// the result was tested in TypeScript Playground 
//true , false , true

