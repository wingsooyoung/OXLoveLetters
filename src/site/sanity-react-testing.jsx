import EleventyContext from 'eleventy-plugin-react-ssr/context';
// import {useContext, useEffect, useRef} from 'react';
// import { useState } from 'react';

import React, {useState, useEffect, useContext} from "react";
import client from '../../client.js'
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const Letters = () => {
    const { title, customData, page } = useContext(EleventyContext);

    const [letters, setLetters] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "postcard-1"]{
                    "": postcardDesign->{
                        "altText":postcardAlt,
                        "":postcardBase{
                          "design":asset->{
                            _id,
                            url
                          }
                        }
                    }, 
                    letterTo[0], 
                    letterSigned, 
                    letterFrom, 
                    letterMessage, 
                    _id
                }`
            )
            //altText , design._id , design.url , letterTo , letterSigned , letterFrom , letterMessage , _id
            .then((data) => setLetters(data))
            .catch(console.error);
    }, []);

    return (
        <>
        <h1>H1: {title}</h1>
            <h2>H2: {page.url}</h2>
        <section className="levelSection">
            <div className="levelSearch0">
                <div className="levelSearch1">
                    <input
                        type="text"
                        className="levelInput"
                    />
                    <button
                        style={{ backgroundColor: "#FE043C" }}
                        className="levelButton"
                    >
                        Search
                    </button>
                </div>
            </div>
            <hr className="levelHRLine" />
            <div className="levelDiv">
                <h3 className="levelMainTitle">
                    All Letters🥗
                </h3>
                <div className="level0">
                    {(letters &&
                        letters.map((letter) => (
                            <div
                                className="level1"
                                key={letter._id}
                            >
                                <div className="level2">
                                    <img
                                        src={urlFor(letter.design).width(200).url()}
                                        alt={letter.altText}
                                        className="level3"
                                    />
                                    <h4 className="level4">
                                        From: {letter.letterFrom}
                                        Signed? {letter.letterSigned}
                                    </h4>
                                    <h4 className="level5">
                                        To: {letter.letterTo}
                                    </h4>
                                </div>
                                <p className="level6">{letter.letterMessage}</p>
                            </div>
                        ))) ?? 'Loading...'}
                </div>
            </div>
        </section>
        </>
);
};


//BELOW: template front matter, but for js/jsx files
Letters.data = {
    layout: 'layouts/base.njk', //THIS WORKS!!!!  I CAN USE REACT COMPENENTS ON MY PRE-STYLED BASE LAYOUT PAGE!!!
    title: 'Sanity and React Testing Page',
    customData: {
        foo: 'bar',
        ph0: '/assets/small borders postcard.svg',
        ph1: 'this is the image desc',
        ph2: 'this is the placeholder text',
        ph3: 'placeholder nickname',
        ph4: '001-ph'
    },
};

export default Letters;
