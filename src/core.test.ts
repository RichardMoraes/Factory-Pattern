import Core from "./core";

describe('Core imported', () => {
    test('Should have #start and #stop methods', () => {
        const core = new Core();
        expect(core).toHaveProperty('start');
        expect(core).toHaveProperty('stop');
    })
})