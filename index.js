//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12]; 
let lastElement =arr1[arr1.length-1]; console.log(lastElement);
let arr2=[true,"green","where",12,56]; 
let lastItem= arr2.at(-1)
console.log(lastItem);
 

//Write a JS program that will join the following array elements into a string. myPets = ["Cow", "Bird", "Snake", "Dog"]; 
 let myPets = ["Cow", "Bird", "Snake", "Dog"]; 
 let pets = myPets.toString();
  console.log({pets});
  
 
 
 //Write a JS script to sort the following array items. var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
  var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]; 
 arr3.sort((x,y) => x-y); 
 console.log({arr3}); 

 //Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates 
 let arr = ["boy", "man", "girl", "school", "girl", "woman"];
const occurence = {};
const nonduplicates = [];
const duplicates = [];
arr.forEach(item => {
    if (occurence[item]) {
        occurence[item]++;
        if (occurence[item] === 2) duplicates.push(item);
    } else {
        occurence[item] = 1;
        nonduplicates.push(item);
    }
    
});
console.log("Nonduplicates:", nonduplicates);
console.log("Duplicates:", duplicates);


 //Write a JS script to search for the following word in the array."food" // If the word is present, return it else return "the search word was not found". let arr5 = ["the", "way", "x", 4]; 
 let arr5 = ["the", "way", "x", 4];
 const lookForWord = arr5.includes("food") ? "food" : "the search word was not found";
 console.log(lookForWord);

  //Write a JS script to sort the following string:let word = "renniw" 
 
  let word = "renniw";
let sortedWord = word.split('').sort().join('');
console.log({sortedWord}); 

  //Using an array of fruits with length 10 , insert 'Tomato' at the 5th index
   let fruits = ["Mangoes","Apples","Oranges","Avocado","Pineapple","citrus","Pears","Bananas","Watermelon","peach"] 
   const index = 5; 
  const x = "Tomato"; 
  fruits.splice(index,0,x); 
  console.log({fruits})
  