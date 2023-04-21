
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function parseData(data, setArtItem) {
    //get random object ids 
    let setOfRandomNumbers = new Set();
    for (let i = 0; i < 24; i++) {
        let randomNumber = getRandomInt(data.total);
        const n = data.objectIDs[randomNumber];
        if (n > 100000 && n < 600000) {
            setOfRandomNumbers.add(n);
        }


    }
    const arr = [...setOfRandomNumbers];
    setArtItem(arr);
}
