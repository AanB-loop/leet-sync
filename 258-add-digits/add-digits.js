/**
 * @param {number} num
 * @return {number}
 */
var addDigits =
    function newnumber(sum){
    if(sum<10){
        return sum;
    }
    let arr=String(sum);
    let count=0;
    for(let i=0;i<arr.length;i++){
        count+=Number(arr[i])
    }
    return sum>=10? newnumber(count): sum ;
return newnumber()
};