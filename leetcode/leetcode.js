//! Task 1 a variant  Hash map
function twoSum(nums, target) {
    const hashMap = {};  
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  
        if (complement in hashMap) {
            return [hashMap[complement], i];  
        }
        hashMap[nums[i]] = i;  
    }
}

const nums = [3,3];
const target = 6;
console.log(twoSum(nums, target));

/* //! Task 1 b variant  Brute Force

function twoSum1 (nums, target) {
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
        if(nums[i] + nums[j] === target){
            return [i,j]
        }
    }
    }
};

console.log(twoSum1(nums, target)); */




// Task 2

function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0; 
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }
    return total;
}


console.log(romanToInt("III"));     
console.log(romanToInt("LVIII"));    
console.log(romanToInt("MCMXCIV"));  



// Task 3



function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; 
    let prefix = strs[0]; 

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1); 
            if (prefix === "") return ""; 
        }
    }

    return prefix; 
}


console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    
