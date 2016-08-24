function wordifier(string) {
  // given a string, make a number out of it.
  var transforms = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
    200: "two hundred",
    300: "three hundred",
    400: "four hundred",
    1000: "one thousand",
    2000: "two thousand",
    3000: "three thousand",
    4000: "four thousand"
}



    var output = [],
        sNumber = transforms.toString();

 for (var i = 0, len = sNumber.length; i < len; i += 1) {
     output.push(+sNumber.charAt(i));
 }

 String.prototype.replaceAll = function(search, replacement) {
   var target = this;
   return target.replace(new RegExp(search, 'g'), replacement);
 };
  if (sNumber.length === 6){
  var thousands = parseInt(sNumber.splice(0, 3).join().replaceAll(",", ""));
   var rest = parseInt(sNumber.join().replaceAll(",", ""));
   if (rest === 000) {
     return wordifier(thousands) + " thousand";
   } else {
     return wordifier(thousands) + " thousand " + wordifier(rest);
   }
 }
else if (sNumber.length === 5){
   var thousands = parseInt(sNumber.splice(0, 2).join().replaceAll(",", ""));
   var rest = parseInt(sNumber.join().replaceAll(",", ""));
   if (rest === 000) {
     return transforms[thousands] + " thousand";
   } else {
     return transforms[thousands] + " thousand " + wordifier(rest);
   }
 }

 if (transforms[string]) {
   return transforms[string];
 } else if (output.length === 4){
   var thousands = output.splice(0, 3);
   var rest = parseInt(output.join().replaceAll(",", ""));
   if (rest === 000) {
     return transforms[thousands] + " thousand";
   } else {
     return transforms[thousands] + " thousand " + wordifier(rest);
   }
 }
 else if (output.length === 3){
   var hundreds = output.splice(0, 2);
   var singles = parseInt(output.join().replaceAll("", ""));
   if (singles === 00) {
     return transforms[hundreds] + " hundred";
   } else {
     return transforms[hundreds] + " hundred " + wordifier(singles);
   }
 } else if (output.length === 2){
   var doubles = output.splice(0, 1);
   return transforms[singles] + transforms[singles];

 }


 else {
   return transforms[output[0] * 10] + " " + transforms[output[1]];
 }
}
module.exports = wordifier;
