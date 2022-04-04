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

//Problem 5
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

var alphOrder = upperCaseFirstLetter("the quick brown fox")
console.log(alphOrder);