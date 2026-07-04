/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
let final =s.split("").sort().join();
let last=t.split("").sort().join();
let newArr=final===last?true:false
return newArr
};