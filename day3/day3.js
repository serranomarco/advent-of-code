const fs = require('fs');
const input = fs.readFileSync('./input2.txt', 'utf-8');
const binary = input.split('\n');

function binaryDiagnostic(binary) {
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
        if(binary[i][0] === '1') obj.first += 1
        if(binary[i][1] === '1') obj.second += 1
        if(binary[i][2] === '1') obj.third += 1
        if(binary[i][3] === '1') obj.fourth += 1
        if(binary[i][4] === '1') obj.fifth += 1
    }

    if(obj.first > binary.length / 2){
        gamma.push('1');
        epsilon.push('0');
    }else{
        gamma.push('0');
        epsilon.push('1');
    }

    if(obj.second > binary.length / 2){
        gamma.push('1');
        epsilon.push('0');
    }else{
        gamma.push('0');
        epsilon.push('1');
    }

    if(obj.third > binary.length / 2){
        gamma.push('1');
        epsilon.push('0');
    }else{
        gamma.push('0');
        epsilon.push('1');
    }

    if(obj.fourth > binary.length / 2){
        gamma.push('1');
        epsilon.push('0');
    }else{
        gamma.push('0');
        epsilon.push('1');
    }

    if(obj.fifth > binary.length / 2){
        gamma.push('1');
        epsilon.push('0');
    }else{
        gamma.push('0');
        epsilon.push('1');
    }

    console.log(gamma, epsilon)


    return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
}

console.log(binaryDiagnostic(binary));