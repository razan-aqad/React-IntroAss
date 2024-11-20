//Task(2)
// Function to calculate the sum and average of numbers in an array
function Sum_Average(nums){
    // Calculate the sum using reduce to iterate and add all numbers in the array
    const sum = nums.reduce((accumelator, current) => accumelator + current, 0);
    // Get the length of the array
    const lngt = nums.length;
    // Calculate the average by dividing the sum by the length
    const average = sum / lngt;
    // Return an object containing both the sum and the average
    return { sum, average };
}
// Array of numbers to test the function
const array = [50 , 80 , 60 , 77 , 30 , 10];
// Print the sum and average using the values returned by the function
console.log("The summation equals = " + Sum_Average(array).sum + "\nAnd the Average equals = " + Sum_Average(array).average);


//Task(3)
// Function to remove duplicate strings from an array
function unique_strs(arr){
    // Create a new array from a Set to ensure all elements are unique
    const uniqueArrayString = Array.from(new Set(arr));
    // Return the unique array
    return uniqueArrayString;
}
// Array with duplicate strings to test the function
const duplicatedArray = ["razan" , "sara" , "farah" , "haya" , "doaa" , "razan" , "farah" , "doaa"];
// Print the array with duplicates removed
console.log(unique_strs(duplicatedArray));


