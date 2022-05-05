/*
Staircase detail

This is a staircase of size n = 4:

   #
  ##
 ###
####

Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size n.
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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n: number): void {
    // Write your code here
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);
    
    for (let i = 0; i < n; i++) {
      
      let j;
      for (j = 0; j < (n - 1) - i; j++) {
          ws.write(' ');
      }
      for (j; j < n; j++) {
          ws.write('#');
      }
      ws.write('\n');
    }
    ws.end();
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    staircase(n);
}
