/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
let addArr=gain.unshift(0);
let count=0;
let newArr=[];
for(let i=0;i<gain.length;i++){
    count+=gain[i];
    newArr.push(count)
}
let last=newArr.sort((a,b)=>a-b);
let final=last[last.length-1];
return final
};