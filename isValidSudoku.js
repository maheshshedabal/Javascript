//determine if a 9X9 soduko board is valid. only the filled cells nees to be validated acording to following rules
//1.each row should contain 1-9 without repetation
//2.each column should cointain 1-9 without repetation
//3.each of the nine 3X3 sub boxes in the grid should cointain 1-9 without repetation

//Time complexity: O(n^2)
//Space complexity: O(3n)~O(n)

function isValidSudoku(board) {
    const N=9;

    let row = Array.from({ length: N }, () => new Set());
    let col = Array.from({ length: N }, () => new Set());
    let box = Array.from({ length: N }, () => new Set());

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            const value = board[r][c];

            if (value === '.') continue;

            //formula to calculate the box
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (row[r].has(value) || col[c].has(value) || box[boxIndex].has(value)) {
                return false;
            }

            row[r].add(value);
            col[c].add(value);
            box[boxIndex].add(value);
        }
    }

    return true;

}

const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log('isValidSudoku: ',isValidSudoku(board)); 