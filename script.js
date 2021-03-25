// check is it polindrome

function palindrome(str) {
  var newStr = str.replace(/[^a-z\d]/gi, "").toLowerCase();
  var reverseStr = newStr.split("").reverse().join("");
  return newStr === reverseStr;
}

//palindrome("eye");

console.log(palindrome("eye")); //true
console.log(palindrome("A man, a plan, a canal. Panama")); //true
console.log(palindrome("0_0 (: /- :) 0-0")); //true
console.log(palindrome("_eye")); //true
palindrome("race car"); //true
palindrome("My age is 0, 0 si ega ym."); // true

//-- convert num To Roman

function convertToRoman(num) {
  var romObj = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  var expandNum = num
    .toString()
    .split("")
    .map((x) => Number(x));
  var getNum = expandWith0(expandNum);
  var rom = getNum.map((x) => findRom(x));

  function expandWith0(arr) {
    var newArr = [];
    var n = arr.length;
    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i] * Math.pow(10, n - 1));
      n -= 1;
    }
    return newArr;
  }

  function findRom(x) {
    var xlength = x.toString().length;
    var pureNum = x / Math.pow(10, xlength - 1); //how many times

    var numPoint = x / pureNum; //100 , 10, 1...

    if (pureNum >= 1 && pureNum <= 3) {
      return romObj[numPoint].repeat(pureNum);
    } else if (pureNum === 5) {
      return romObj[x];
    } else if (pureNum === 4 || pureNum === 9) {
      var bigger = x + numPoint;
      return romObj[numPoint].concat(romObj[bigger]);
    } else if (pureNum >= 6 && pureNum <= 8) {
      var smaller = (pureNum - 5) * Math.pow(10, xlength - 1);
      var base = 5 * Math.pow(10, xlength - 1);
      var strAdd = findRom(smaller);
      return romObj[base].concat(strAdd);
    }
  }

  return rom.join("");
}

console.log(convertToRoman(36));

//------------------------------------------------------------ --
//-- Caesars Cipher -- convert code A-M code+13 & M-Z code-13, others symbols stay same

function rot13(str) {
  var strArr = str.split("");
  var strToCode = strArr.map((x) => convertCipher(x)).join("");

  function convertCipher(x) {
    var code = x.charCodeAt(0);

    if (code >= 65 && code <= 77) {
      return x.replace(x, String.fromCharCode(code + 13));
    } else if (code >= 77 && code <= 90) {
      return x.replace(x, String.fromCharCode(code - 13));
    } else {
      return x;
    }
  }
  return strToCode;
}

//rot13("SERR PBQR PNZC");

console.log(rot13("SERR PBQR PNZC")); // should decode to the string FREE CODE CAMP)
//  -----------------------------------------
