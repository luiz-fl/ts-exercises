/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix

is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2 . 
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

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    const arrayLength = arr.length;
    let difference = 0
    for (let i = 0; i < arrayLength; i++) {
        difference += arr[i][i];
        difference -= arr[i][(arrayLength - 1) - i];
    }
    
    return Math.abs(difference)
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    let arr: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
