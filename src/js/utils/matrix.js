/* eslint import/prefer-default-export: 0 */
export const combineMatrices = (oldMatrix, ...rest) => {
    const newMatrix = rest.shift();
    const matrix = new Array(16);
    for (let row = 0; row < 4; row += 1) {
        for (let col = 0; col < 4; col += 1) {
            matrix[(row * 4) + col] = 0;
            for (let i = 0; i < 4; i += 1) {
                matrix[(row * 4) + col] += (
                    oldMatrix[(i * 4) + col] *
                    newMatrix[(row * 4) + i]
                );
            }
        }
    }

    if (rest.length) {
        return combineMatrices(matrix, ...rest);
    }
    return matrix;
};
