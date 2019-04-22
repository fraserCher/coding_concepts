import AlphabeticIndex from './AlphabeticIndex';

describe('AlphabeticIndex', () => {

    let subject;

    beforeEach(() => {
        subject = new AlphabeticIndex();
    });

    it('getIndexArray returns sequential characters for index', () => {
        expect(subject.getIndexArray(1)).toEqual(['A']);
        expect(subject.getIndexArray(5)).toEqual(['A', 'B', 'C', 'D', 'E']);
    });

    it('getCharIndex returns numerical index for character', () => {
        expect(subject.getCharIndex('A') + 1).toEqual(1);
        expect(subject.getCharIndex('D') + 1).toEqual(4);
    });

});
