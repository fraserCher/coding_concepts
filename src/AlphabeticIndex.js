class AlphabeticIndex{
    
    getIndexArray(numericIndex){
        let indexArray = [numericIndex];
        for (let i = 0; i < numericIndex; i++) {
            const IndexChar = String.fromCharCode(65+i);
            indexArray[i] = IndexChar;
        }

        return indexArray;
    }
}

export default AlphabeticIndex;