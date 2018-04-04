export const dot = (v1, v2) => v1.map((a, i) => a * v2[i]).reduce((p, c) => p + c);

export const cross = (v1, v2) => {
    if (v1.length === 2 && v2.length === 2) {
        return (v1[0] * v2[1]) - (v1[1] * v2[0]);
    }
    if (v1.length === 3 && v2.length === 3) {
        return [
            (v1[1] * v2[2]) - (v1[2] * v2[1]),
            (v1[2] * v2[0]) - (v1[0] * v2[2]),
            (v1[0] * v2[1]) - (v1[1] * v2[0]),
        ];
    }
    throw new Error('no valid vectors were given.', v1, v2);
};

export const normal = (vector) => {
    if (vector.length === 3) {
        const totalLength = Math.sqrt((
            (vector[0] * vector[0]) +
            (vector[1] * vector[1]) +
            (vector[2] * vector[2])
        ));
        return vector.map(v => v / totalLength);
    }
    throw new Error('no valid vectors were given.', vector);
};
