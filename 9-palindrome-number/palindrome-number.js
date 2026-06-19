/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

let revnumber = x.toString().split("").reverse().join("");
let newnum = Number(revnumber);

    if(x===newnum){
  return true
}
else{
 return false
}


};