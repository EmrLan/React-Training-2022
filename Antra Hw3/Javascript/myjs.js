// Problem 1
// Write a JavaScript function that reverse a number.
function reverseNumber (num){
    var numString = String(num);
    var numArr = numString.split("");

    var revString = ""; 
    for( var i = (numArr.length - 1); i >= 0; i-- )
    {
        revString += numArr[i];
    }

    return parseInt(revString);
}

//var revNum = reverseNumber(32243);
//console.log(revNum);


// Problem 2
// Write a JavaScript function that checks whether a passed string is palindrome or not? EX: Madam

function palindrome (input)
{
    input = input.toLowerCase();
    var revString = "";
    for( var i = (input.length - 1); i >= 0; i-- )
    {
        revString += input[i];
    }

    
    var result = input.localeCompare(revString);
    if(result === 0)
        return true;
    else
        return false;
}

//var isPalindrome = palindrome("Madam");

//console.log(isPalindrome);


// Problem 3
// Write a JavaScript function that generates all combinations of a string

function combinationString(input)
{
    var out = [];
    var str = "";
    for( var i = 0; i < input.length; i++ )
    {
        for( var j = i; j < input.length; j++ )
        {
            str += input[j];
            out.push(str);
        }
        str = "";
    }

    return out;
}

//var combString = combinationString("dog")
//console.log(combString)

// Problem 4
// Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabeticOrder (input)
{
    var inpArr = input.split("")
    inpArr.sort();
    return inpArr.join("");
}

//var alphOrder = alphabeticOrder("webmaster")
//console.log(alphOrder);

// Problem 5
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case


function upperCaseFirstLetter (input)
{
    console.log(input);
    var inpArr = input.split(" ")
    for(var i = 0; i < inpArr.length; i++)
    {
        inpArr[i] = (inpArr[i]).replace((inpArr[i])[0],(inpArr[i])[0].toUpperCase());
    }
    return inpArr.join(" ");
}

//var upCaseFirst = upperCaseFirstLetter("the quick brown fox")
//console.log(upCaseFirst);


// Problem 6
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.


function findLongestWord (input)
{
    var inpArr = input.split(" ")
    var outString = ""
    if(inpArr.length === 1)
        return inpArr[0];
    else if(inpArr.length === 0)
        return "";
    else
        outString = inpArr[0];

    for(var i = 0; i < inpArr.length; i++)
    {
        if( (inpArr[i]).length > (outString).length )
        {
            outString = inpArr[i];
        }
    }

    return outString
}

//var longestWord = findLongestWord("Web Development Tutorial")
//console.log(longestWord);

// Problem 7
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vowelCount (input)
{
    var inArr = input.split("");
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for(var i = 0; i < inArr.length; i++)
    {
        if(vowels.includes(inArr[i]))
            count++;
    }
    return count;
}

//var count = vowelCount("The quick brown fox");
//console.log(count);

// Problem 8
// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function checkPrime(num)
{
    if(num < 2)
        return false;
    else if(num === 2)
        return true;
    else
        for(var i = 2; i < num; i++)
        {
            if(num % i === 0)
                return false;
        }
    return true;
}
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.
// 30803, 30703
//var isPrime = checkPrime(30703);
//console.log(isPrime)


// Problem 9
// Write a JavaScript function which accepts an argument and returns the type.

function typeArg (input)
{
    return typeof(input);
}

// var test;

// console.log( typeArg({name: "big", value: 250}) );
// console.log( typeArg(true) );
// console.log( typeArg(function check(){}) );
// console.log( typeArg(0) );
// console.log( typeArg("strtin") );
// console.log( typeArg(test) );

// Problem 10
// Write a JavaScript function which returns the n rows by n columns identity matrix.

function matrixRowColumn (input){
    var row = input.length;
    var column = (input[0]).length;


    return String(row + " x "+ column);
}

//console.log( matrixRowColumn([[3,2,6], [7,5,6]]) );

// Problem 11
// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively

function secondLowHigh (input)
{
    input.sort(function (a,b) {return a -b});
    //console.log(input);
    return [input[1],input[ (input.length) - 2 ]];
}

// console.log( secondLowHigh( [1,2,3,4,5] ) );
// console.log( secondLowHigh( [3,21,4,56,10,100,69,84,41] ) );

// Problem 12
// Write a JavaScript function which says whether a number is perfect

function perfectNumber (input)
{
    //var divArr =  [];
    var sum = 0;
    for(var i = 1; i < input; i++)
    {
        if(input % i === 0)
        {
            //divArr.push(i);
            sum += i;
        }
    }
    if (sum === input)
        return true;
    else
        return false
}

//console.log( perfectNumber(8128) );

// Problem 13
// Write a JavaScript function to compute the factors of a positive integer

function factors (input)
{
    var divArr =  [];
    for(var i = 1; i <= input; i++)
    {
        if(input % i === 0)
        {
            divArr.push(i);
        }
    }
    return divArr;
}

//console.log( factors(36) );


// Problem 14
// Write a JavaScript function to convert an amount to coins

function amountToCoins (input)
{
    var result = [];
    do {
        if(input >= 25)
        {
            result.push(25);
            input -= 25;
        }
        else if(input >= 10)
        {
            result.push(10);
            input -= 10;
        }
        else if(input >= 5)
        {
            result.push(5);
            input -= 5;
        }
        else if(input >= 2)
        {
            result.push(2);
            input -= 2;
        }
        else
        {
            result.push(1);
            input -= 1;
        }
        
    } while(input > 0)

    return result;
}

//console.log( amountToCoins(46) );

// Problem 15
// Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function exponent(b,n)
{
    return Math.pow(b,n);
}

//console.log(exponent(8,2));

// Problem 16
// Write a JavaScript function to extract unique characters from a string.

function uniqueChar(input)
{
    var obj = {};
    var str = ""
    for(var i = 0; i < input.length; i++)
    {
        if(! (obj[input[i]]) )
        {
            obj[input[i]] = 1;
            str += input[i];
        }
    }

    return str;
}

//console.log( uniqueChar("thequickbrownfoxjumpsoverthelazydog") );

// Problem 17
// Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function numOccurences(input)
{
    var obj = {}
    for(var i = 0; i < input.length; i++)
    {
        if(obj[input[i]])
        {
            obj[input[i]] += 1;
        }
        else
        {
            obj[input[i]] = 1;
        }
    }

    return obj;
}

//console.log( numOccurences("madam") );


// Problem 18
// Write a function for searching JavaScript arrays with a binary search.

function binarySearch (array, value)
{
    array = array.sort( function (a,b) { return a - b} )
    console.log(array);

    var half = parseInt((array.length) / 2);
    var max = array.length;
    var min = 0;

    while(1)
    {
        //console.log("Min = " + min + " Half = " + half + " Max = " + max);
        if(array[half] === value)
        {
            return true;
        }
        else if((array[half] < value) && ((max - min) > 1) )
        {
            min = half + 1;
            half = parseInt( (min + max) / 2);
        }
        else if(array[half] > value && ((max - min) > 1))
        {
            max = half - 1;
            half = parseInt( (min + max) / 2 );
        }
        else
        {
            return false;
        }
    }

}

//console.log( binarySearch([2, 8, 5, 6, 12, 56, 41, 13, 62, 59, 26, 78, 100, 65, 17], 2 ));

// Problem 19
// Write a JavaScript function that returns array elements larger than a number

function largerNum (array, value)
{
    array = array.sort( function (a,b) { return a - b} )
    console.log(array);

    var half = parseInt((array.length) / 2);
    var max = array.length;
    var min = 0;

    var output = [];
    var isDone = false;

    while(!isDone)
    {
        //console.log("Min = " + min + " Half = " + half + " Max = " + max);
        if((array[half] < value) && ((max - min) > 1) )
        {
            min = half + 1;
            half = parseInt( (min + max) / 2);
        }
        else if(array[half] > value && ((max - min) > 1))
        {
            max = half - 1;
            half = parseInt( (min + max) / 2 );
        }
        else
        {
            if(array[half] <= value)
            {
                half += 1;
            }
            isDone = true;
        }
    }

    for( var i = half; i < array.length; i++)
    {
        output.push( array[i] );
    }

    return output;    
}

//console.log( largerNum([2, 8, 5, 6, 12, 56, 41, 13, 62, 59, 26, 78, 100, 65, 17], 50 ));

// Problem 20
// Write a JavaScript function that generates a string id (specified length) of random characters.


function randomLetter(){
    var val = 0;
    while( !(val >= 48 &&  val <= 57) && !(val >= 65 &&  val <= 90) && !(val >= 97 &&  val <= 122) )
        {
            val = (Math.floor(Math.random() * 74)) + 48;
        }
    return val
}

function generateRanChar(len){
    var result = "";
    let val = 0;
    for (var i = 0; i < len; i++)
    {
        result += String.fromCharCode( randomLetter() );
    }
    return result;
}

//console.log( generateRanChar(26) );

// Problem 21
// Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 

// function getSubset(array, subsetLength){
//     var result = [];
//     var arrTemp = [];    

//     for(let i = 0; i < array.length; i++)
//     {
//         if(arrTemp)
//     }
//     return result;
// }

// console.log( getSubset([2, 8, 5, 6], 2) );


// Problem 22
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function numOccurenceLetter (str, letter)
{
    str = str.toLowerCase();
    letter = letter.toLowerCase();

    var count = 0;
    for(var i = 0; i < str.length; i++)
    {
        if(str[i] === letter)
            count++;
    }
    return count;
}

//console.log( numOccurenceLetter("www.microsoft.com", 'o') );


// Problem 23
// Write a JavaScript function to find the first not repeated character. 

// function firstNonRepeatedChar (str)
// {
//     var obj = {};
//     for(var i = 0; i < str.length; i++)
//     {
//         if( obj[str[i]] )
//             obj[str[i]] += 1;
//         else
//             obj[str[i]] = 1;
//     }

//     for(let i in obj)
//     {
//         if(obj)
//     }

//     return obj;
// }

// console.log( firstNonRepeatedChar("abacddbec") );
