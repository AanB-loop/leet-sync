/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
let rep=s.replace(/[^a-zA-Z0-9]/g, "")
         .toLowerCase()
let rev=rep.split("").reverse().join("").toLowerCase();
let final = rep===rev? true: false
return final
};