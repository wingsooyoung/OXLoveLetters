import EleventyContext from 'eleventy-plugin-react-ssr/context';
import {useContext, useEffect, useRef} from 'react';
import { useState } from 'react';

// function MyInput() {
//   const [text, setText] = useState('hello');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input value={text} onChange={handleChange} />
//       <p>You typed: {text}</p>
//       <button onClick={() => setText('hello')}>
//         Reset
//       </button>
//     </>
//   );
// }

//  <div className="containerboxM grid-item modal-content" id="modal1" style={{visibility: "hidden"}}>
//       <img src={image} alt={altText} id="postcardM" />
//       <div id="contentboxM" class="template">{content}</div>
//       <div id="nameboxM" class="template">{nickname}</div>
//       <div id="lettercountM" class="template">{counter}</div>
//       <button onClick={onClose}>Close</button>
//  </div>

function ModalContent({ image, altText, content, nickname, counter }) {

    return (
        <div id="myModalReact" className="modalReact">
            <span className="closeR">×</span>
            <div className="containerboxMR grid-item modal-content" id="modal1R">
                <img src={image} alt={altText} id="postcardMR" />
                <div id="contentboxMR" className="templateR">{content}</div>
                <div id="nameboxMR" className="templateR">{nickname}</div>
                <div id="lettercountMR" className="templateR">{counter}</div>
            </div>
        </div>

    )
}

function ContainerBox({ image = "/assets/small borders postcard.svg", altText = "placeholder alt", content = "placeholder content", nickname = "ph n.n.", counter = "0" }) {
    // const ref = useRef(null);

    const [hide, setHide] = useState(true);

    // const { customData } = useContext(EleventyContext);
    // const [showModal, setShowModal] = useState(false);
    // const [image, setImage] = useState('placeholder.com');
    // const [altText, setAltText] = useState('alt placeholder');
    // const [content, setContent] = useState('content placeholder');
    // const [nickname, setNickname] = useState('nickname placeholder');
    // const [counter, setCounter] = useState('counter placeholder');
  
    // function handleChange(e) {
    //   setImage(e.target.children[0].attributes[0].value)
    //   setAltText(e.target.children[0].attributes[1].value)
    //   setContent(e.target.children[1].textContent)
    //   setNickname(e.target.children[2].textContent)
    //   setCounter(e.target.children[3].textContent)
    //
    //   (() => setShowModal(true))
    // }

    {/*useEffect(() => {*/}
    //     if (showModal) {
    //         ref.current.modalZoom(this);
    //     } else {
    //         ref.current.modalZoom(this);
    //         //var span = document.getElementsByClassName("close")[0];
    //         // try {
    //         //     span.onclick = function() {
    //         //         modal.style.display = "none";
    //         //     }}
    //     }
    // });

    return (
      <>
        <div
            className="containerbox grid-item"
            // ref={ref}
            // onClick={() => {
            //     setHide(!hide);
            // }}
            >
            <img
                src={image}
                alt={altText}
                onClick={() => {
                    setHide(!hide);
                }}
            />
            <div 
                id="contentbox" 
                className="template"> 
                {content}
            </div>
            <div 
                id="namebox" 
                className="template"> 
                {nickname}
            </div>
            <div 
                id="lettercount" 
                className="template"> 
                {counter}
            </div>
        </div>
          {/*{!hide && <p>Hello world</p>}*/}
        {!hide && (
          <ModalContent
              image={image}
              altText={altText}
              content={content}
              nickname={nickname}
              counter={counter}/>
        )}
        
      </>
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
        ph0: '/assets/small borders postcard.svg',
        ph1: 'this is the image desc',
        ph2: 'this is the placeholder text',
        ph3: 'placeholder nickname',
        ph4: '001-ph'
    },
};

export default MyPage;