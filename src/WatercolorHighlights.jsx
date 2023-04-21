import React, { useState, useEffect } from 'react';
import dict from './artitems.json';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import { RenderHighlights } from './RenderHighlights';
import { getRandomInt, parseData } from './ParseData';


export default function WatercolorHighlights() {
    const [artItem, setArtItem] = useState(undefined);

    // get random word from json
    let randomInt = getRandomInt(dict.words.length)
    let randomWord = dict.words[randomInt]

    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Watercolors&q=${randomWord}`)
            .then(response => response.json())
            .then(
                (data) => { parseData(data, setArtItem) },
                (error) => { console.log(error) })
    }, [])



    return (
        <>
            <div>
                <h1>Watercolor inspirations from the MET collections</h1>
                <RenderHighlights artProfile={artItem} />
                <SearchForm medium="watercolors" />
            </div>
        </>
    );
};

