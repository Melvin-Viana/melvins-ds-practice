/**
 * @description: String of LRUD only; Representing Left, Right, Up, Down. Find if the robot returns to its original location
 * @param: string
 * @returns boolean 
 */

const vacuumCleanerRoute = (path) => {
    let y = 0; // U = 1, D = -1
    let x = 0;// R = 1, L = -1
    const calcY = {'U': 1, 'D': -1}
    const calcX = {'L': -1, 'R': 1}
    for (char of path) {
        if (calcY.hasOwnPropertym(char)) {
            y+= calcY[char]
        } else {
            x += calcX[char];
        }
    }
    return x === 0 && y === 0;
}

console.log(vacuumCleanerRoute('LR')) // True
console.log(vacuumCleanerRoute('LRL')) // False
console.log(vacuumCleanerRoute('LRUD')) // True
console.log(vacuumCleanerRoute('RUULLDRD')) // True