import EleventyContext from 'eleventy-plugin-react-ssr/context';
import { useContext } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

function MyInput() {
  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button>
    </>
  );
}

function ModalContent({ onClose,  }) {
  const [image, setImage] = useState('url.com');
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

  }

    return (
    <div class="containerboxM grid-item modal-content" id="modal1" onClick={onClose}>
      <img src={image} alt={altText} id="postcardM" />
      <div id="contentboxM" class="template">{content}</div>
      <div id="nameboxM" class="template">{nickname}</div>
      <div id="lettercountM" class="template">{counter}</div>
    </div>
    )
  


}
// -------------------------- my modal --------------------------------

//----------------------------------------------------------------------

function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}

function ContainerBox() {
    const { customData } = useContext(EleventyContext);

    return (
        <div
            className="containerbox grid-item"
            // onClick="modalZoom(this)" INCORRECT!
            // onClick={x}
            onClick={handleChange}
            >

            <img
                src={customData.source}
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
            <ContainerBox onClick={handleChange}/>
            <ContainerBox onClick={handleChange}/>
            <ContainerBox onClick={handleChange}/>
            <ModalContent />
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
            <div className="clipping-container">
              <PortalExample />
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
        source: '/assets/small borders postcard.svg',
        altText: 'this is the image desc',
        content: 'this is the placeholder text'
    },
};

export default MyPage;