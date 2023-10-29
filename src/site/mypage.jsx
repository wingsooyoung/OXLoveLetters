import EleventyContext from 'eleventy-plugin-react-ssr/context';
import { useContext } from 'react';

function ContainerBox() {
    const { customData } = useContext(EleventyContext);

    return (
        <div
            className="containerbox grid-item"
            onClick="modalZoom(this)">

            <img
                src={customData.src}
                alt={customData.altText}
            />
                    
            <div 
                id="contentbox" 
                className="template"> 
                {customData.content}
            </div>

            <div 
                id="namebox" 
                className="template"> 
                {customData.content}
            </div>
                
            <div 
                id="lettercount" 
                className="template"> 
                {customData.content}
            </div>

            <div 
                id="membersbox" 
                className="template">
                {customData.content}
            </div>
        </div>
    )
}


function GridContainer() {
    return (
        <div 
            className="grid-container">
            <ContainerBox />
            <ContainerBox />
            <ContainerBox />
        </div>
    )
}

function MyPage() {
    // Access to anything from the data cascade, including page data
    // and Eleventy supplied data from https://www.11ty.dev/docs/data-eleventy-supplied/
    const { title, customData, page } = useContext(EleventyContext);

    return (
        <>
            <h1 className={customData.foo}>{title}</h1>
            <p>URL: {page.url}</p>
            <GridContainer />
        </>
    );
}

//BELOW: template front matter, but for js/jsx files
MyPage.data = {
    layout: 'layouts/base.njk', //THIS WORKS!!!!  I CAN USE REACT COMPENENTS ON MY PRE-STYLED BASE LAYOUT PAGE!!!
    title: 'Hello world',
    customData: {
        foo: 'bar',
        source: '/assets/small borders postcard.svg',
        altText: 'this is the image desc',
        content: 'this is the placeholder text'
    },
};

export default MyPage;