import EleventyContext from 'eleventy-plugin-react-ssr/context';
import { useContext } from 'react';
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

function ModalContent({ onClose, image, altText, content, nickname, counter }) {

    return (
    <div class="containerboxM grid-item modal-content" id="modal1" style={{visibility: {hidden}}}>
      <img src={image} alt={altText} id="postcardM" />
      <div id="contentboxM" class="template">{content}</div>
      <div id="nameboxM" class="template">{nickname}</div>
      <div id="lettercountM" class="template">{counter}</div>
      <button onClick={onClose}>Close</button>
    </div>
    )
}

function ContainerBox() {
    const { customData } = useContext(EleventyContext);
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState('placeholder.com');
    const [altText, setAltText] = useState('alt placeholder');
    const [content, setContent] = useState('content placeholder');
    const [nickname, setNickname] = useState('nickname placeholder');
    const [counter, setCounter] = useState('counter placeholder');
  
    function handleChange(e) {
      setImage(e.target.children[0].attributes[0].value)
      setAltText(e.target.children[0].attributes[1].value)
      setContent(e.target.children[1].textContent)
      setNickname(e.target.children[2].textContent)
      setCounter(e.target.children[3].textContent)

      (() => setShowModal(true))
    }
    return (
      <>
        <div
            className="containerbox grid-item"
            onClick={handleChange}
            >
            <img
                src={customData.ph0}
                alt={customData.ph1}
            />
            <div 
                id="contentbox" 
                className="template"> 
                {customData.ph2}
            </div>
            <div 
                id="namebox" 
                className="template"> 
                {customData.ph3}
            </div>
            <div 
                id="lettercount" 
                className="template"> 
                {customData.ph3}
            </div>
        </div>
        {showModal && (
          <ModalContent onClose={() => setShowModal(false)} image={image} altText={altText} content={content} nickname={nickname} counter={counter}/>
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
            <div id="myModal" className="modal" style="display: none;">
                <span className="close">×</span>
                <div className="containerboxM grid-item modal-content" id="modal1">
                    <img src="/assets/small borders postcard.svg" alt=""
                         id="postcardM" />
                        <div id="contentboxM" className="template"></div>
                        <div id="nameboxM" className="template"></div>
                        <div id="lettercountM" className="template"></div>
                </div>

            </div>
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