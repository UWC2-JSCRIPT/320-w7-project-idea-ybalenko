import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseData } from './ParseData';
import { RenderHighlights } from './RenderHighlights';


export default function WatercolorSearch() {
    let { params } = useParams();
    const paramObj = JSON.parse(params)
    const [artItem, setArtItem] = useState(undefined);

    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Watercolors&q=${paramObj.keyword}&q=${paramObj.artistOrCulture}&q=${paramObj.artTitle}`)
            .then(response => response.json())
            .then(
                (data) => { parseData(data, setArtItem) },
                (error) => { console.log(error) })
    }, [])


    return (
        <>
            <div>
                <h1>Watercolor search results for {paramObj.keyword} {paramObj.artistOrCulture} {paramObj.artTitle}</h1>
                <RenderHighlights artProfile={artItem} />
                <p id='back-link'>
                    <Link to="/">Homepage</Link></p>
                <p id='back-link'>
                    <Link to="/watercolors">Watercolor Highlights</Link></p>
            </div>
        </>
    )


}


WatercolorSearch.propTypes = {
    params: PropTypes.object,
}
