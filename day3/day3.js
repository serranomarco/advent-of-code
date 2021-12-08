const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
const binary = input.split('\n');

function binaryDiagnostic(binary) {
    const gamma = [];
    const epsilon = [];
    const obj = {};

    for(let i = 0; i < binary.length; i++){
        for(let j = 0; j < binary[i].length; j++){
            if(binary[i][j] === '1' && obj[j]) {
                obj[j] += 1
            }else if(binary[i][j] === '1' && !obj[j]){
                obj[j] = 1
            }else if(binary[i][j] !== '1' && !obj[j]){
                obj[j] = 0;
            }
        }
    }

    for(let i = 0; i < binary[0].length; i++){
        if(obj[i] > binary.length / 2){
            gamma.push('1');
            epsilon.push('0');
        }else{
            gamma.push('0');
            epsilon.push('1');
        }
    }
    return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
}

console.log(binaryDiagnostic(binary));