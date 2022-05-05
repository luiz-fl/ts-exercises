/*
Given an array of integers, find the sum of its elements.

For example, if the array ar = [1, 2, 3], 1+2+3 = 6, so return 6.

Function Description:
Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
simpleArraySum has the following parameter(s):
    ar: an array of integers
*/

'use strict';

import { WriteStream, createWriteStream } from "fs";
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

function simpleArraySum(ar: number[]): number {
    // Write your code here
   let sum = 0;
   ar.forEach(item => sum += item);
   
   return sum;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const arCount: number = parseInt(readLine().trim(), 10);

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result: number = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}
