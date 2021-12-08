const fs = require('fs');
const input = fs.readFileSync('./input2.txt', 'utf-8');
const binary = input.split('\n');

function binaryDiagnostice() {
    const gamma = [];
    const epsilon = [];
    const obj = {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0
    };

    for(let i = 0; i < binary.length; i++){
        if(binary[0] === '1') obj.first += 1
        if(binary[1] === '1') obj.second += 1
        if(binary[2] === '1') obj.third += 1
        if(binary[3] === '1') obj.fourth += 1
        if(binary[4] === '1') obj.fifth += 1
    }

    if(obj.first > binary.length){
        gamma.push('1');
        epsilon.push('0');
    }else{
        gamma.push('0');
        epsilon.push('1');
    }

    if(obj.second > binary.length){
        gamma.push('1');
        epsilon.push('0');
    }else{
        gamma.push('0');
        epsilon.push('1');
    }

    if(obj.third > binary.length){
        gamma.push('1');
        epsilon.push('0');
    }else{
        gamma.push('0');
        epsilon.push('1');
    }

    if(obj.fourth > binary.length){
        gamma.push('1');
        epsilon.push('0');
    }else{
        gamma.push('0');
        epsilon.push('1');
    }

    if(obj.fifth > binary.length){
        gamma.push('1');
        epsilon.push('0');
    }else{
        gamma.push('0');
        epsilon.push('1');
    }

    return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
}