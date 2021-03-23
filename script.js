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
    // console.log(x);
    var xlength = x.toString().length;
    var pureNum = x / Math.pow(10, xlength - 1); //how many times
    //console.log("pureNum "+ pureNum);
    var numPoint = x / pureNum; //100 , 10, 1...
    //console.log("numPoint "+ numPoint);

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

//convertToRoman(36);

console.log(convertToRoman(36));
// console.log(romObj[1].concat(romObj[5]));
// console.log((52).toString().length);

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

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));
console.log("SERR PBQR PNZC".replace("E", "E".charCodeAt(0)));

console.log(rot13("SERR PBQR PNZC")); // should decode to the string FREE CODE CAMP)
console.log();

//------------------------------------------------------------- --
//-- Telephone Number Validator

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1555-555-5555"));

// telephoneCheck("5555555555") should return true.
// telephoneCheck("555-555-5555") should return true.
// telephoneCheck("(555)555-5555") should return true.
// telephoneCheck("1 555)555-5555") should return false.
// telephoneCheck("-1 (757) 622-7382") should return false.

//------------------------------------------------------------- --
// -- Cash Register

var worths = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  var convert = (num) => num * 100;

  var change = convert(cash) - convert(price);
  var total = cid.reduce((acc, curr) => acc + convert(curr[1]), 0);

  var cidReverce = cid.reverse();

  if (total < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return [change, total, cidReverce];
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log();
