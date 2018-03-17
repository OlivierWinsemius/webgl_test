import loadTexture from './loadTexture';

export default textures => (
    Object.assign(
        {},
        ...Object.keys(textures).map(key => ({
            [key]: loadTexture(textures[key]),
        })),
    )
);
