import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';



export function RenderHighlights({ artProfile }) {
    const [artDetails, setArtDetails] = useState([]);

    useEffect(() => {
        if (artProfile !== undefined) {
            artProfile.map((artObjectId, idx) => {
                const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artObjectId}`
                fetch(url)
                    .then(response => response.json())
                    .then(
                        (data) => {
                            if (data.primaryImage != '') {
                                let newArtDetail = {
                                    'title': data.title,
                                    'primaryImage': data.primaryImage,
                                    'artistDisplayName': data.artistDisplayName,
                                };
                                setArtDetails(a => [...a, newArtDetail]);
                            }
                        },
                        (error) => { console.log(error) })
            });
        }
    }, [artProfile])

    return (
        <>
            <HighlightDetails details={artDetails} />
        </>
    );
}

function HighlightDetails({ details }) {
    const artPiece = details.slice(0, 4).map((artItem, id) => {
        return (
            <>
                <div className='pictures-container' key={id}>
                    <img className='art-image' src={artItem.primaryImage} alt={artItem.title} />
                    <span className='art-details' > Title: {artItem.title} </span>
                    <span className='art-details'> Artist: {artItem.artistDisplayName} </span>
                </div>

            </>
        );
    });

    return (
        <>
            <div className='art-container'> {artPiece}</div>
        </>
    );
};

RenderHighlights.propTypes = {
    artProfile: PropTypes.array
};

HighlightDetails.propTypes = {
    details: PropTypes.array
};

