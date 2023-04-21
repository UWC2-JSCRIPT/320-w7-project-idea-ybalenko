import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';



export default function SearchForm({ medium }) {
    const [keyword, setKeyword] = useState(undefined);
    const [artistOrCulture, setArtistOrCulture] = useState(undefined);
    const [artTitle, setArtTitle] = useState(undefined);
    const navigate = useNavigate();


    const handleSubmit = () => {
        if (keyword || artTitle || artistOrCulture) {
            const params = {
                "keyword": keyword,
                "artistOrCulture": artistOrCulture,
                "artTitle": artTitle
            }
            const paramString = JSON.stringify(params)
            navigate(`/${medium}/search/${paramString}`)
        }
        if (keyword === undefined && artTitle === undefined && artistOrCulture === undefined) {
            alert('At least one parameter should be specified to search')
        }
    }

    return (
        <>
            <div>
                <h3>Search for more</h3>
                <form className="form-inline">
                    <div className="form-group">
                        <div className="col-md-6">
                            <p>
                                <input type="text" className="form-control w-50" id="key-word" placeholder='Type a key word' value={keyword} onChange={e => setKeyword(e.target.value)} />
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <input type="text" id="art-title" className="form-control w-50" placeholder='Type a title' value={artTitle} onChange={e => setArtTitle(e.target.value)} />
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <input type="text" id="artistOrCulture" className="form-control w-50" placeholder='Type an artist or culture' value={artistOrCulture} onChange={e => setArtistOrCulture(e.target.value)} />
                            </p>
                        </div>
                        <button className="btn btn-primary" type="button" onClick={handleSubmit}>Submit</button>
                    </div>
                    <span id='back-link'>
                        <Link to="/">Homepage</Link></span>
                </form>
            </div>
        </>
    );
};





