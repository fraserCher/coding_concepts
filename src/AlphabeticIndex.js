class AlphabeticIndex {
    
    getIndexArray(numericIndex) {
        let indexArray = [numericIndex];
        for (let i = 0; i < numericIndex; i++) {
            const IndexChar = String.fromCharCode(65+i);
            indexArray[i] = IndexChar;
        }

        return indexArray;
    }

    getCharIndex(charIndex) {
        return charIndex.toString().charCodeAt(0) - 65;
    }
}

export default AlphabeticIndex;
