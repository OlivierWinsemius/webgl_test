const start = require('./index').default;

describe('Index.js', () => {
    it('Modules are loaded:', async () => {
        const chunks = await start();
        expect(chunks).toBeTruthy();
    });
    it('Modules are of type array:', async () => {
        const chunks = await start();
        expect(typeof chunks).toBe('object');
        expect(chunks.length).toBeGreaterThan(0);
    });
});
