// Arrays

// Create an array
const fruits = ["banana", "Orenge"];
console.log(fruits);

const names = new Array("John", "Lara");
console.log(names);

// Array created using String.prototype.split().
const vehicles = "car, jeep, ship, plane, fighter jet".split(", ");
console.log(vehicles);
console.log(vehicles.length);


const emptyArray = [];
console.log(emptyArray);

const notEmptyArray = [""];
console.log(notEmptyArray);

let firstVehicle = vehicles[0];
let secondVehicle = vehicles[1];
console.log("First Item [0] : " + firstVehicle);
console.log("Second Item [1] : " + secondVehicle);

let mixArray = [1, 2, true, , "String", function print(){console.log("This is a function in mixArray")}];
console.log(mixArray);
mixArray[5]();

let multiDimentionalArray = [[1, 2], [4, 5], [6,7]];
console.log(multiDimentionalArray);
console.log(multiDimentionalArray[0][0]);
console.log(multiDimentionalArray[1][1]);

const shoppingList = ["bread", "banana", 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shoppingList);
shoppingList[0] = "cake";
console.log(shoppingList);

// Array methods
//##########################
//Create a string from an array
const words = ["I", "love", "art"];
const sentence = words.join();
console.log(sentence);

//Find the index of an item in an array
const indexOfCar = vehicles.indexOf("car");
console.log(indexOfCar);

//Adding items
const cities = ["New York", "Manchester", "California"];
cities.push("Las Vegas"); // add to the end
console.log(cities);
cities.push("Chicago", "Los Angeles", "Palo Alto");

const lenghOfCities = cities.push("New Boston"); // returns the length of array after adding item
console.log(lenghOfCities);

cities.unshift("Liverpool"); // add to the start
console.log(cities);

const newLengthOfCities = cities.unshift("Phoenix");
console.log(cities);
console.log(newLengthOfCities);

// Removing items
cities.pop(); // remove last item
console.log(cities);

const city = cities.pop();
console.log(city);

cities.shift(); //remove first item
console.log(cities);

const indexOfNewYork = cities.indexOf("New York");
if(indexOfNewYork !== -1) {
  cities.splice(indexOfNewYork, 1);
}
console.log(cities);

const indexOfManchester = cities.indexOf("Manchester");
if(indexOfManchester !== -1) {
  cities.splice(indexOfManchester, 3);
}
console.log(cities);

cities.splice(1, 25);
console.log(cities);

// Accessing every item
const animals = ["dog", "cat", "lion", "elephent", "hipo", "panda"];
for(const animal of animals) {
  console.log(animal);
}

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map(number => number * 3);
console.log(numbers);
console.log(newNumbers);

function addWordLetter(letter) {
  return  "Letter " + letter;
}
const letters = ["a", "b", "c", "d"];
const newLetters = letters.map(addWordLetter);
console.log(letters);
console.log(newLetters);

const randomLetters = ["kld", "sdffds", "sdfsdsdfsf", "sdfsdfsdfsfsf", "sdfsdfsdfsdfsdsfd"];
const longer = randomLetters.filter(word => word.length > 8);
console.log(randomLetters);
console.log(longer);

function isLong(city) {
  return city.length > 8;
}
const citiesOfUsa = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
const bigCities = cities.filter(isLong);
console.log(citiesOfUsa);
console.log(bigCities);

/* Like map(), we give a function to the filter() method, and filter() calls this function for every item in the array, passing in the item. If the function returns true, then the item is added to a new array. Finally it returns the new array. */

// Converting between strings and arrays
const data = 'Manchester, London, Liverpool, Birmingham, Leeds, Carlisle';
const collectionOfCities = data.split(', ');
console.log(collectionOfCities);

const newData = collectionOfCities.join(', ');
console.log(newData);

const dogNames = ['Rocket','Flash','Bella','Slugger'];
const dogNamesString = dogNames.toString();
console.log(dogNames);
console.log(dogNamesString);