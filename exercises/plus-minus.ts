/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.
*/

'use strict';
import { WriteStream, createWriteStream } from 'fs'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);
    
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    arr.forEach(item => {
        if (item > 0) {
            ++positiveCount;
            return;
        }
        if (item < 0) {
            ++negativeCount;
            return;
        }
        if (item === 0) {
            ++zeroCount;
            return;
        }
    })
    
    ws.write(`${(positiveCount/arr.length).toFixed(6)}\n`)
    ws.write(`${(negativeCount/arr.length).toFixed(6)}\n`)
    ws.write(`${(zeroCount/arr.length).toFixed(6)}\n`)
    
    ws.end();
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
