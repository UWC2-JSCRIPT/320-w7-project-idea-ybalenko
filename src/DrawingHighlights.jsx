import React, { useState, useEffect } from 'react';
import dict from './artitems.json';
import { getRandomInt, parseData } from './ParseData';
import SearchForm from './SearchForm';
import { RenderHighlights } from './RenderHighlights';


export default function DrawingHighlights() {
    const [artItem, setArtItem] = useState(undefined);

    let randomInt = getRandomInt(dict.words.length)
    let randomWord = dict.words[randomInt]

    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Drawings&q=${randomWord}`)
            .then(response => response.json())
            .then(
                (data) => { parseData(data, setArtItem) },
                (error) => { console.log(error) })
    }, [])


    return (
        <>
            <div>
                <h1>Drawings inspirations from the MET collections</h1>
                <RenderHighlights artProfile={artItem} />
                <SearchForm medium="drawings" />
            </div>
        </>
    );
};





