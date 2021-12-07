const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
const directions = input.split('\n');
// const directions = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2', ''];
const dive = (directions) => {
    let depth = 0;
    let displacement = 0;

    for(let i = 0; i < directions.length - 1; i++){
        let arr = directions[i].split(' ');
        console.log(arr)

        if(arr[0] ===  'forward'){
            displacement += parseInt(arr[1]);
        }else if(arr[0] === 'up'){
            depth -= parseInt(arr[1]);
        }else{
            depth += parseInt(arr[1]);
        }
    }

    return displacement * Math.abs(depth);
}

const divePartTwo = (direction) => {
    let aim = 0;
    let depth = 0;
    let displacement = 0;

    for(let i = 0; i < directions.length - 1; i++){
        let arr = directions[i].split(' ');

        if(arr[0] ===  'forward'){
            displacement += parseInt(arr[1]);
            depth = depth + (aim * parseInt(arr[1]));
        }else if(arr[0] === 'up'){
            aim -= parseInt(arr[1]);
        }else{
            aim += parseInt(arr[1]);
        }
    }
    return displacement * Math.abs(depth);
}

console.log(divePartTwo(directions));