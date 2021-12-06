function sonarSweep(){
    const fs = require('fs');
    const input = fs.readFileSync('./input.txt', 'utf-8');
    const nums = input.split('\n');

    // const nums = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    let curr = nums[0];
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        const num = parseInt(nums[i]);
        if(curr < num){
            count++;  
        }
        curr = num;
    }

    return count;
}

function sonarSweep2(){
    const fs = require('fs');
    const input = fs.readFileSync('./input.txt', 'utf-8');
    const nums = input.split('\n');

    // const nums = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const threeSum = [];

    for(let i = 0; i < nums.length - 2; i++){
        threeSum.push(parseInt(nums[i]) + parseInt(nums[i+1]) + parseInt(nums[i+2]));
    }

    let curr = threeSum[0];
    let count = 0;

    for(let i = 0; i < threeSum.length; i++){
        
        if(curr < threeSum[i]){
            count++;  
        }
        curr = threeSum[i];
    }

    return count;
}

console.log(sonarSweep2())
